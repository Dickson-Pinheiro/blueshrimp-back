import {MongoClient} from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)
let blueshrimpdb;
try {
    await mongoClient.connect()
    blueshrimpdb = mongoClient.db()
} catch (error) {
    console.log(error)
}

export {blueshrimpdb}