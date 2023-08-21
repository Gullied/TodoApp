const express = require("express")
const router = require("./routes/todoRoutes")
const app = express()
require("dotenv").config()

//Db connection
const connectToMongo = require("./db/connection")

//Port
const PORT = process.env.PORT

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router)


//running port 
app.listen (PORT, ()=> {console.log(`app is running on Port:  ${PORT}`)
connectToMongo();
})

module.exports = app

