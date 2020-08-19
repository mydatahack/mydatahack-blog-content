// Import required modules
const fs = require('fs')
const path = require('path')
const { Pool, Client} = require('pg')
const copyFrom = require('pg-copy-streams').from
const config = require('./config.json')

// inputfile & target table
var inputFile = path.join(__dirname, '/data/customer.json')
var targetTable = 'usermanaged.customers'

// Getting connectin parameters from config.json
const host = config.host
const user = config.user
const pw = config.pw
const db = config.db
const port = config.port
const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`

// Connecting to Database
const client = new Client({
    connectionString: conString,
  })
client.connect()

// Execute Truncate Table
client.query(`Truncate ${targetTable}`, (err) => {
    if (err) {
      client.end()
      // return console.log(err.stack)
      return console.log(`Error in truncate table ${err}`)
      process.exit(1)
    } else {
      console.log(`Truncated ${targetTable}`)
    }
  })

console.log('check after client.query')

// Connecting to Database
const client = new Client({
  connectionString: conString,
})
client.connect()
// Execute Copy Function
var stream = client.query(copyFrom(`COPY ${targetTable} FROM STDIN`))
var fileStream = fs.createReadStream(inputFile)

fileStream.on('error', (error) =>{
    console.log(`Error in reading file: ${error}`)
})
stream.on('error', (error) => {
    console.log(`Error in copy command: ${error}`)
})
stream.on('end', () => {
    console.log(`Completed loading data into ${targetTable}`)
    client.end()
})
fileStream.pipe(stream);

console.log('Check after all code')
