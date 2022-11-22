import { dbConnect } from "./dbConnect.js";
import { ObjectId } from "mongodb"; // Importing Object - unique identifiers for all the docs in db

export async function addNewRealEstate(req, res) {
    const newRealEstate = req.body
    const db = dbConnect()
    await db.collection("RealEstate").insertOne
        (newRealEstate)
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: "New RealEstate Added." })
}//getAll?

export async function getAllRealEstate(req, res) {
    const db = dbConnect()
    const collection = await db.collection("RealEstate").find().toArray()
    res.send(collection)
}

export async function updateRealEstate(req, res) {

    const { RealEstateId } = req.params
    const db = dbConnect()

    await db.collection('RealEstate')
        .findOneAndUpdate({ _id: new ObjectId(RealEstateId) }, { $set: req.body })
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(202).send({ message: "Real Estate updated" })
}
export async function getOneRealEstate(req, res) {
    const db = dbConnect()
    const { RealEstateId } = req.params
    const collection = await db.collection("RealEstate")
        .find({ _id: new ObjectId(RealEstateId) }).toArray()
    res.send(collection)
}

export async function deleteRealEstate(req, res) {
    const db = dbConnect()
    const { RealEstateId } = req.params
    await db.collection("RealEstate")
        .findOneAndDelete({ _id: new ObjectId(RealEstateId) })
    res.status(203).send('RealEstate Deleted')
}




