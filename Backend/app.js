import express from 'express'
import ConnDB from './db/db.js'
import { config } from 'dotenv'
import authRouter from './routes/user.routes.js'
import deliveryRouter from './routes/delivery.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

config()

const app=express()
ConnDB()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded())

app.use('/api/auth',authRouter)
app.use('/api/deliveries',deliveryRouter)

app.get('/',(req,res)=>{
    res.send("Hello World")
})


export default app;