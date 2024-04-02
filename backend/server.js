import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import adminRouter from './routes/adminRoutes.js'
import userRouter from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config()


const PORT = process.env.PORT || 5000
const app = express();
app.use(cors())
app.use(express.json());

connectDB()

app.use('/',userRouter)
app.use('/admin',adminRouter)



app.listen(PORT,()=>console.log(`server running at ${PORT}`));

