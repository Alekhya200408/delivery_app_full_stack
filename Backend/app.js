import express from 'express'
import ConnDB from './db/db.js'
import { config } from 'dotenv'
import authRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'

config()

const app=express()
ConnDB()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded())

app.use('/api/auth',authRouter)

app.get('/',(req,res)=>{
    res.send("Hello World")
})


export default app;