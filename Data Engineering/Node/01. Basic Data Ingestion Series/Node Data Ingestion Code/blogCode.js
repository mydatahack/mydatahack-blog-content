# (1) Setting up

[cc lang="bash" tab_size="4" lines="-1" theme="mac-classic" line_numbers="false"]
mkdir node-pg-test
cd node-pg-test
npm init
npm i pg -ES
npm i pg-copy-streams -ES
[/cc]

// (2) Config file

[cc lang="text" tab_size="4" lines="-1"  line_numbers="false"]
{
    "host": "your host",
    "user": "your username",
    "pw": "your password",
    "db": "your database name",
    "port": "port, 5432 is default"
}
[/cc]

//  (3) Importing Module
[cc lang="javascript" tab_size="4" lines="-1"]
// Import required modules
const fs = require('fs')
const path = require('path')
const { Pool, Client} = require('pg')
const copyFrom = require('pg-copy-streams').from
const config = require('./config.json')

// inputfile & target table
var inputFile = path.join(__dirname, '/data/customer.csv')
var table = 'usermanaged.customers'

// Getting connectin parameters from config.json
const host = config.host
const user = config.user
const pw = config.pw
const db = config.db
const port = config.port
const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`
[/cc]

// (4) Truncate

[cc lang="javascript" tab_size="4" lines="-1"]
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
[/cc]

//  (5) Load
[cc lang="javascript" tab_size="4" lines="-1"]
// Connecting to Database
const client = new Client({
    connectionString: conString,
  })
  client.connect()
  // Execute Copy Function
var stream = client.query(copyFrom(`COPY ${targetTable} FROM CSV HEADER STDIN`))
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
[/cc]

// (6) Truncate & Load
[cc lang="javascript" tab_size="4" lines="-1"]
// Connecting to Database
const client = new Client({
    connectionString: conString,
  })

client.connect()

const executeQuery = (targetTable) => {
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
        var fileStream = fs.createReadStream(inputFile)
        
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
// Execute the function
executeQuery(table)
[/cc]