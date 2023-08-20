const express = require("express")
const app = express()
require("dotenv").config()

//Db connection
const connectToMongo = require("./db/connection")

//Port
const PORT = process.env.PORT

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//running port 
app.listen (PORT, ()=> {console.log(`app is running on Port:  ${PORT}`)
connectToMongo();
})

module.exports = app

