import express from "express";
import { addNewRealEstate, getAllRealEstate } from "./src/realestate.js";

const PORT = 3030 //Application will using express as my API
const app = express()
app.use(express.json())

app.post('/qualifying', addNewRealEstate)
app.get('/qualifying', getAllRealEstate)

app.get('/', (req, res) => {
    res.send('Hello Jacques')
})


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))