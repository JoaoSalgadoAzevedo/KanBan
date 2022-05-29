import { MongoClient } from "mongodb" 
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const DB_NAME = "db_opplog"
const COLLECTION_USERS = "db_users"
const COLLECTION_CARDS = "db_cards"

let client;

export  async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL)}
        console.log(client)
        return client
    } catch (errors) {
        console.log(errors)
    }
}

export  async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return  await client.db(dbName).collection(collectionName)
}


//sign in/up
export  async function findUserByEmail(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.findOne({ EmailAddress: email })
    
}

//sign up
export  async function createUser(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.insertOne({...data})
}

// sign in
export  async function createSession(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CARDS)
    return await collection.insertOne(data)
}