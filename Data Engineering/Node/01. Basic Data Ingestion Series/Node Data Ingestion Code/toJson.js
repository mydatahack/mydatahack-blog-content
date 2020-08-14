const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

const inputFile = path.join(__dirname, '/data/customer-data.csv')
const outputFile = path.join(__dirname, '/data/customer.json')

const convertCSV = (inputPath, outputPath) => {
    console.log(`Converting ${inputPath} to JSON.`)
    const convCsv = (inputP, outputP, callback) => {
        buff = ''
        csv()
        .fromFile(inputP)
        .on('data', (data) => {
                buff += data.toString('utf8')
        })
        .on('done', (error) => {
            // if error happens, callback with error
            if (error) return callback(error)
            // if no error, callback with the converted data
            console.log('Finished conversion.')
            callback(null, buff)
        })
    }
    convCsv(inputPath, outputPath, (error, data) =>{
        // if error happens, gives error message and code stops here.
        if (error) return console.error(`Error in csv conversion: ${error}`)
        // if no error, write file
        fs.writeFileSync(outputPath, data)
        console.log(`File created as ${outputPath}`)
    })
}

convertCSV(inputFile, outputFile)