import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDB from './db/connectDB.js'
import eventsRouter from './routes/event-routes.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

connectDB()

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/events', eventsRouter)

app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`))
