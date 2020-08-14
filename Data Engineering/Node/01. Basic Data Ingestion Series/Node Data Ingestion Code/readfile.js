const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, '/data/customer-data.csv')
const outputFile = path.join(__dirname, '/data/output.csv')

const readWrite = (filePath) => {
    console.log(`Reading file from ${file}`)
    const readFile = (fileP, callback) => {
        fs.readFile(fileP, {encoding:'utf-8'}, (error, data) =>{
            if (error) return console.error(error)
            callback(error, data)
        })
    }
    readFile(filePath, (error, data) =>{
        if (error) return console.error(error)
        fs.writeFileSync(outputFile, data)
        console.log(`Finished writing data to ${outputFile}`)
    })
}

readWrite(file)
