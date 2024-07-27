import express from "express";
import dotenv, { config } from "dotenv"
import connectDb from "./config/Database.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config()
connectDb()

const app = express()
const PORT = process.env.PORT || 3000

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

//ROUTES
app.use('/api/v1/auth', authRoutes )

app.get("/",(req,res)=>{
    res.send('<h1>Server</h1>')
})


app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`)
})