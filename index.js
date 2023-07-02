const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const { MONGO_URL, PORT } = process.env

app.use(
    cors({
        origin: ["http://localhost:4000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)

app.use(express.json())

mongoose.connect(
    MONGO_URL,
    {
        useNewURLParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((error) => console.log(error))

    
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
