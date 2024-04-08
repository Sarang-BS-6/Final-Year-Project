const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose, mongo} = require('mongoose')
const cookieParser = require('cookie-parser')

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to Database"))
.catch((err) => console.log("Database not Connected ", err))

const app = express()

const port = 8000

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))

app.listen(port, ()=> console.log(`Server is running on ${port}`))



