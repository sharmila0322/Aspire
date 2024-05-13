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
        //var myquery = { email: "sam.josh@abc.com" };
        const ackresult= await collection.deleteMany({ "department.name": "HR" });
        console.log(`${ackresult.deletedCount} document deleted.`);

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