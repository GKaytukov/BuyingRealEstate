import express from "express";
import cors from "cors"; 
import { addNewRealEstate, getAllRealEstate, getOneRealEstate, updateRealEstate, deleteRealEstate } from "./src/realestate.js";

const PORT = 3030 //Application will using express as my API
const app = express()
app.use(express.json())
app.use(cors())

app.post('/RealEstate', addNewRealEstate)
app.get('/RealEstate', getAllRealEstate)
app.patch('/RealEstate/:RealEstateId', updateRealEstate)
app.get('/RealEstate/:RealEstateId', getOneRealEstate)
app.delete('/RealEstate/:RealEstateId', deleteRealEstate)

app.get('/', (req, res) => {
    res.send('Hello Jacques')
})


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))