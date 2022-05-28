import { MongoClient } from "mongodb";
const MONGO_URL = process.env.MONGO_URL
    ?? "mongodb://localhost:27017"


let client;
export async function connectToMongo() {
    try {
        if (!client) {
            client = await MongoClient.connect(MONGO_URL)
        }
        return client
    } catch (err) {
        console.log(err)
    }
}

export async function getMongoCollection(collectionName) {
    const client = await connectToMongo()
    return await client.db("DB_OPPLOG").collection(collectionName)
}




async function findUserByEmail(email) {
    const collection = await getMongoCollection("USERS_DB")
    return await collection.findOne({ email: email })
    // return await collection.find({email: email}).toArray()[0]
}
async function findUserById(id) {
    const collection = await getMongoCollection("USERS_DB")
    return await collection.findOne({ _id: ObjectId(id) })
    // return await collection.find({email: email}).toArray()[0]
}
async function findSessionById(id) {
    const collection = await getMongoCollection("USERS_DB")
    return await collection.findOne({ _id: ObjectId(id) })
    // return await collection.find({email: email}).toArray()[0]
}
async function createUser(data) {
    const collection = await getMongoCollection("USERS_DB")
    return await collection.insertOne({...data, points:0})
}
async function createSession(data) {
    const collection = await getMongoCollection("USERS_DB")
    return await collection.insertOne(data)
}


//NOS VAMOS TER 1 DB C/ 2 COLECTIONS
// DB_OPPLOG
// colecoes === COL_USER
// === COL_CARDS