const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const { MONGO_URL, PORT } = process.env


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
