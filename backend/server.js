//get dependencies

const { urlencoded } = require('express')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000     //read port from .env file, or set it to 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))  //specify the route to use(look in) goalRoutes file

app.use(errorHandler)

app.listen(port, () => console.log(`Server started at port ${port}`))

