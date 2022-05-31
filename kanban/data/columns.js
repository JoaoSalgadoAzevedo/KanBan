import { MongoClient } from "mongodb" 
import { getMongoCollection } from "./db"

const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"

const DB_NAME = "db_opplog"
const COLLECTION_USERS = "db_users"
const COLLECTION_CARDS = "db_cards"
const COLLECTION_SESSIONS = "db_sessions"

export async function findCardsByState(column) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CARDS)
    return await collection.find(column).toArray()
}