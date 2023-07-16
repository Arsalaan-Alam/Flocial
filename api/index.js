import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import flocial from "./flocial.js"

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

const flo = new flocial()

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("OK!")
})

app.get("/getProfiles", async(req, res) => {
    
    res.send(await flo.getAllProfiles())
    
})

app.get("/getProfile", async(req, res) => {
    
    if (!req.query.address) {
        res.send({ status: 'error', message: 'Address is missing'})
    }
    res.send(await flo.getProfileByAddress(req.query.address))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})