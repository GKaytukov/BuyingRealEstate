import express from "express";
import { addNewRealEstate, getAllRealEstate, getOneRealEstate, updateRealEstate, deleteRealEstate } from "./src/realestate.js";

const PORT = 3030 //Application will using express as my API
const app = express()
app.use(express.json())

app.post('/RealEstate', addNewRealEstate)
app.get('/RealEstate', getAllRealEstate)
app.patch('/RealEstate/:RealEstateId', updateRealEstate)
app.get('/RealEstate/:id', getOneRealEstate)

app.get('/', (req, res) => {
    res.send('Hello Jacques')
})


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))