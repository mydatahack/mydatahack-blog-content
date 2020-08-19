// Import required module
const fs = require('fs')
const path = require('path')
const https = require('https')
const Json2csvParser = require('json2csv').Parser
const {Client} = require('pg')
const copyFrom = require('pg-copy-streams').from
const config = require('./config.json')

// File output path & api endpoint
const outputFile = path.join(__dirname, '/data/photos.csv')
const url = 'https://jsonplaceholder.typicode.com/photos' 

// Define the field
const fields = ['albumId', 'id', 'title', 'url', 'thumbnailUrl']

// target table
var table = 'usermanaged.photos'

// Getting connectin parameters from config.json
const host = config.host
const user = config.user
const pw = config.pw
const db = config.db
const port = config.port
const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`

// Load data function
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
        var stream = client.query(copyFrom(`COPY ${targetTable} FROM STDIN CSV HEADER`))
        var fileStream = fs.createReadStream(outputFile)
        
        fileStream.on('error', (error) =>{
            console.log(`Error in creating read stream ${error}`)
            client.end()
        })
        stream.on('error', (error) => {
            console.log(`Error in creating stream ${error}`)
            client.end()
        })
        stream.on('end', () => {
            console.log(`Completed loading data into ${targetTable}`)
            client.end()
        })
        fileStream.pipe(stream);
    })
}

// Main Logic Execution
https.get(url, (res) => {
    res.setEncoding('utf8')
    let data = ''
    res.on('data', (chunk) => {
        data += chunk
    })
    res.on('end', () => {
        console.log('Starting Json to Csv Conversion...')
        try {
            // Converting Json response to CSV
            const parser = new Json2csvParser({fields})
            const csv = parser.parse(JSON.parse(data))
            // Create a csv file
            fs.writeFileSync(outputFile, csv)
            console.log(`Csv file has been created as ${outputFile}`)
            // Load data into PG table
            executeQuery(table)
        } catch (err) {
            console.error(err);
        }
    })
})



