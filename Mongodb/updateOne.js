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
        // var myquery = { email: "kapil.d@abc.com" };
        // var newvalues = { $set: {firstName: "kapila", lastName: "Divan" } };
        const ackresult= await collection.updateOne({email: "kapil.d@abc.com"}, {$set:{firstName: "kapilan", lastName: "Divan" }});
        console.log(`${ackresult.upsertedId} document updated.`);

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