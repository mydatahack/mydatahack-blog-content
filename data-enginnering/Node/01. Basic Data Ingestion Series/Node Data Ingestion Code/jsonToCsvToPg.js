// Loading required modules
const fs = require('fs')
const path = require('path')
const Json2csvTransform = require('json2csv').Transform
const {Client} = require('pg')
const copyFrom = require('pg-copy-streams').from
const config = require('./config.json')

// Defining file path
const inputFile = path.join(__dirname, '/data/transaction.json')
const outputFile = path.join(__dirname, '/data/transaction.csv')

// Defining fields
const fields = ['Id', 'Name', 'TransactionId', 'Transaction.ItemId',
'Transaction.price', 'Subscriber', 'Payment.Type', 'Payment.Total',
 'Payment.Success', 'Note']

// target table
var table = 'usermanaged.trans'

// Getting connectin parameters from config.json
const host = config.host
const user = config.user
const pw = config.pw
const db = config.db
const port = config.port
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
        var stream = client.query(copyFrom(`COPY ${targetTable} FROM STDIN CSV HEADER`))
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

// Create a readable stream
const input = fs.createReadStream(inputFile, { encoding: 'utf8' });
const output = fs.createWriteStream(outputFile, { encoding: 'utf8' });
const json2csv = new Json2csvTransform({fields, unwind:'Transaction'});
 
const processor = input.pipe(json2csv).pipe(output);
 
// You can also listen for events on the conversion and see how the header or the lines are coming out.
json2csv
  .on('header', header => console.log(header))
  .on('line', line => console.log(line))
  .on('error', err => console.log(err))
  .on('end', () =>{
      console.log(`Writing csv file, ${outputFile}, has been completed`)
      // After csv file is created, execute the query to load the data
      executeQuery(table)
  }) 