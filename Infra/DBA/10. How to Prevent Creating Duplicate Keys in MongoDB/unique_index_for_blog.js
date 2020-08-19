// Setting up
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://writer:Password1@localhost:27017/admin'

// Data
const initialData = [{
    studentId:1,
    firstName:'John',
    lastName:'West',
    Major:'Psychology'
},{
    studentId:2,
    firstName:'John',
    lastName:'Doe',
    Major:'Science'
},{
    studentId:3,
    firstName:'Shane',
    lastName:'West',
    Major:'IT'
}]

// function to create uniqe index
const uniqueIndex = (collection, callback) => {
    collection.createIndex({studentId:1}, {unique:true}, (err, result) => {
        if(err) {console.error(`Failed to create index ${err}`); process.exit(1);}
        console.log(`Unique Index created successfully: ${result}`)
        callback(result)
    })
}

// function to insert student records
const insertStudents= (collection, callback) => {
    collection.insert(initialData, (err, result) => {
        if (err) {
            console.error(`Error in insertion: ${err}`)
            process.exit(1)
        }
        console.log(`No of records (result.result.n): ${result.result.n}`)
        console.log(`No of records (result.ops.length): ${result.ops.length}`)
        callback(result)
    })
}

// put them all together
MongoClient.connect(url, (err, client) => {
    if (err) return process.exit(1)
    console.log('Connection successful.')
    const db = client.db('usermanaged')
    const collection = db.collection('students')
    insertStudents(collection, () => {
        uniqueIndex(collection, () => {
            client.close()
            console.log('Connection closed')
        })
    })
})
  
