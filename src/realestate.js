import { dbConnect } from "./dbConnect.js"

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

export async function findRealEstateByType(req,res) {
    const db = dbConnect()
    const { search } = req.params
    const collection = await db.collection("RealEstate").find({ type: search }).toArray()
    res.send(collection)
}






