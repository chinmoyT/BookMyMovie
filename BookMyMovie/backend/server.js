import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes';
import adminRouter from './routes/adminRoutes';
import movieRouter from './routes/movieRoutes';
import bookingRouter from './routes/bookingRoutes';
import cors from 'cors'
dotenv.config()
const PORT = 9000;
const app = express();


//middlewares
app.use(express.json())
app.use(cors());
app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/movie', movieRouter)
app.use('/booking', bookingRouter)


mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Connected to MONGODB and Server is running at port ${PORT}`);
    })
})
.catch((e)=> console.log(e))


