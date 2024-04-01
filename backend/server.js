import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import adminRouter from './routes/adminRoutes.js'
import userRouter from './routes/userRoutes.js'

dotenv.config()


const PORT = process.env.PORT || 5000
const app = express();
connectDB()

app.use('/',userRouter)
app.use('/admin',adminRouter)



app.listen(PORT,()=>console.log(`server running at ${PORT}`));

