// Loading required modules
const fs = require('fs')
const path = require('path')
const Json2csvTransform = require('json2csv').Transform
const Json2csvParser = require('json2csv').Parser

// Define file path
const inputFile = path.join(__dirname, '/data/transaction2.json')
const outputFile = path.join(__dirname, '/data/transaction.csv')
// Define the field
const fields = ['Id', 'Name', 'TransactionId', 'Transaction.ItemId',
 'Transaction.price', 'Subscriber', 'Payment.Type', 'Payment.Total',
  'Payment.Success', 'Note']

// Read file
const input = fs.readFileSync(inputFile)

try {
    const parser = new Json2csvParser({fields, unwind:'Transaction'});
    const csv = parser.parse(JSON.parse(input));
    console.log(csv);
} catch (err) {
    console.error(err);
}


/*
Streaming Example
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
      console.log('completed')
  })
*/
