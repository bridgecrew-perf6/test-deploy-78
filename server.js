const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{console.log("ok")})