const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        const db = client.db('test')
        const collection = db.collection('employees');

        const cursor=collection.find({});
        const ackresult= await collection.insertOne({
                _id: 7,
                firstName: 'Arneeth',
                lastName: 'Laya',
                gender: 'male',
                email: 'arneeth.laya@abc.com',
                salary: 15000,
                department: { name: 'Developer' }
              })
        console.log("the record inserted into the colection with "+ ackresult.insertedId)

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