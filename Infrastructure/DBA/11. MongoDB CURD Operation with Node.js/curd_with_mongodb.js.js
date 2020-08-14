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
   firstName:'Allen',
   lastName:'Doe',
   Major:'Science'
},{
   studentId:3,
   firstName:'Shane',
   lastName:'West',
   Major:'IT'
}]

// (1) Insert the initial data
const insertStudent = (collection, callback) => {
    collection.insert(initialData, (err, result) => {
        if (err) {
            console.error(`Insertion error ${err}`)
            process.exit(1)
        } 
        console.log(`No of records: ${result.result.n}`)
        callback(result)
    })
}

// (2) Update John's Major to Literature
const updateStudent = (collection, callback) => {
    collection.update({studentId:1},{$set:{Major:'Literature'}}, (err, results) => {
        if (err) {
            console.error(`Update error: ${err}`)
            process.exit(1)
        }
        console.log(`Record updated successfully.`)
        callback(results)
    })
}

// (3) Remove studentId=3
const removeStudent = (collection, callback) => {
    collection.remove({studentId:3}, (err, results) => {
        if (err) {
            console.error(`Remove record error: ${err}`)
            process.exit(1)
        }
        console.log(`Record removed successfully.`)
        callback(results)
    })
}

// (4) Query all records
const getStudents = (collection, callback) => {
    collection.find({}).toArray((err, data) => {
        if (err) {
            console.error(`Cannot find student records: ${err}`)
            process.exit(1)
        }
        console.log(`Record count: ${data.length}`)
        console.log(data)
        callback(data)
    })
}

// (5) Put them all together
MongoClient.connect(url, (err, client) => {
    if (err) {
        console.error(`Connection Error: ${err}`)
        return process.exit(1)
    }
    console.log(`Connection Successful`)
    const db = client.db('usermanaged')
    const collection = db.collection('students')
    insertStudent(collection, () => {
        updateStudent(collection, () => {
            removeStudent(collection, () => {
                getStudents(collection, () => {
                    client.close()
                    console.log('DB connection closed.')
                })
            })
        })
    })
})