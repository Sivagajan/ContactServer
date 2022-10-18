import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URL
const DB_NAME = process.env.DB_NAME

const client = new MongoClient(URL)

let db

export const connectDb = () => {
    return new Promise((resolve, reject) => {
        if(db)
            resolve(db)
        
        client.connect()
            .then(client => {
                return client.db(DB_NAME)
            })
            .then(DBClient => {
                db = DBClient
                resolve(DBClient)
            })
            .catch(err => reject(err))
    })
}