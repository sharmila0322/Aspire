const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        const db = client.db('aspire')
        const collection = db.collection('employees');

        const cursor=collection.find({});
        const ackresult= await collection.insertMany([
            {
            _id: 8,
            firstName: 'ram',
            lastName: 'prakash',
            gender: 'male',
            email: 'ram.prakash@abc.com',
            salary: 15000,
            department: { name: 'Marketing' }
            },
            {
            _id: 9,
            firstName: 'sam',
            lastName: 'josh',
            gender: 'male',
            email: 'sam.josh@abc.com',
            salary: 20000,
            department: { name: 'HR' }
            },
            {
            _id:10,
            firstName: 'David',
            lastName: 'Brown',
            gender: 'male',
            email: 'david@abc.com',
            salary: 10000,
            department: { name: 'Finance' }},
            {
            _id:11,
            firstName: 'James',
            lastName: 'Miller',
            gender: 'male',
            email: 'james.miller@abc.com',
            salary: 10000,
            department: { name: 'Developer' }},
            {
            _id:12,
            firstName: 'Emy',
            lastName: 'Johnson',
            gender: 'female',
            email: 'emy@abc.com',
            salary: 12000,
            department: { name: 'HR' }},
            {
            _id:13,
            firstName: 'Sarah',
            lastName: 'Jones',
            gender: 'female',
            email: 'sarah@abc.com',
            salary: 15000,
            department: { name: 'Developer' }}
        ])
        console.log("the record inserted into the colection with "+ ackresult.insertedCount)

        await cursor.forEach(record=>{
            console.log(record)
        })
        await client.close()

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();