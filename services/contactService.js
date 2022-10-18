import { connectDb } from "../util/db.js"


export const getAll = () => {
    return new Promise((resolve, reject) => {
        
        connectDb()
            .then(db => db.collection("kontakte").find().toArray())
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}

export const addContact = (req, res) => {

    const contact = {
        name : req.body.last_name,
        first_name : req.body.first_name,
        tel : req.body.tel,
        street : req.body.street,
        housenr : req.body.housenumber,
        postcode : req.body.postcode,
        favorite : req.body.fav
    }

    connectDb()
        .then(db => db.collection("kontakte").insertOne(contact))
        .then(DbRes => {
            res.status(200).send('insert erfolgreich')
        })
        .catch(err => res.status(500).send("Fehler im insert"))
} 
