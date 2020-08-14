// Import required modules
const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')
const {Client} = require('pg')
const copyFrom = require('pg-copy-streams').from
const config = require('./config.json')

const sleep = require('system-sleep')

const inputFile = path.join(__dirname, '/data/customer-data.csv')
const outputFile = path.join(__dirname, '/data/customer.json')

// target table
var table = 'usermanaged.customer'

// Getting connectin parameters from config.json
const host = config.host
const user = config.user
const pw = config.pw
const db = config.db
const port = config.port

// const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`
const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`

const executeQuery = (targetTable) => {
    console.log('Starting executeQuery function')
    // Connecting to Database
    const client = new Client({
        connectionString: conString,
    })
    client.connect()

    const execute = (target, callback) => {
        client.query(`Truncate ${target}`, (err) => {
                if (err) {
                client.end()
                callback(err)
                // return console.log(err.stack)
                } else {
                console.log(`Truncated ${target}`)
                callback(null, target)
                }
            })
    }
    execute(targetTable, (err) =>{
        if (err) return console.log(`Error in Truncate Table: ${err}`)
        var stream = client.query(copyFrom(`COPY ${targetTable} FROM STDIN`))
        var fileStream = fs.createReadStream(outputFile)
        
        fileStream.on('error', (error) =>{
            console.log(`Error in creating read stream ${error}`)
        })
        stream.on('error', (error) => {
            console.log(`Error in creating stream ${error}`)
        })
        stream.on('end', () => {
            console.log(`Completed loading data into ${targetTable}`)
            client.end()
        })
        fileStream.pipe(stream);
    })
}

const main = (inputPath, outputPath) => {
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
        console.log('Sleeping for 3 sec...')
        sleep(3000)
        fs.writeFileSync(outputPath, data)
        console.log(`File created as ${outputPath}`)
        executeQuery(table)
    })
}

main(inputFile, outputFile)
