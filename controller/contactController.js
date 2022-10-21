import { getAll } from "../services/contactService.js"
import { connectDb } from "../util/db.js"
import { ObjectId } from "mongodb"


export const getAllContacts = (req, res) => {
    getAll()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({error: err}))
}


export const changeContact = (req, res) => {

    const id = req.body._id

        const contact = {
            name : req.body.name,
            first_name : req.body.first_name,
            tel : req.body.tel,
            street : req.body.street,
            housenr : req.body.housenr,
            postcode : req.body.postcode,
            favorite : req.body.favorite
        }
        console.log(contact)
        connectDb()
            .then(db => db.collection('kontakte').updateOne({_id: new ObjectId (id)},{$set: {...contact}}))
            .then(result => {
                console.log(result)
                res.status(200).send("update erfolgreich")
            })
            .catch(err => res.status(500).send("update fehlgeschlagen"))
    
}

export const deleteContact = (req,res) => {

    const _id = req.body._id

    connectDb()
        .then(db => db.collection('kontakte').deleteOne({_id: new ObjectId (_id)}))
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err))
}