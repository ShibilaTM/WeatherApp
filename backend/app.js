const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
require('./config/db')
const PORT = process.env.PORT

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRoutes = require('./routes/userRoutes')
app.use('/user',userRoutes)

const notificationRoutes = require('./routes/NotificationRoutes')
app.use('/api',notificationRoutes)


app.listen(PORT,()=>{
    console.log(`Server is Listening on ${PORT}`)
})