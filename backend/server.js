import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCLoudinary from './config/cloudinary.js'
import userRouter from './routes/userroute.js'
import productRouter from './routes/productroute.js'

// App config 
const app= express()
const port=process.env.PORT||4000
connectDb()
connectCLoudinary()
//middleware

app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.get('/',(req,res)=>{
    res.send("APi workiing")
})
app.listen(port,()=>console.log('Server started at port'+port))
