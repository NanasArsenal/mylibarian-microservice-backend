import express,{Request,Response} from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { DbConnection } from './config/db/config';

dotenv.config();
DbConnection()
const PORT = process.env.PORT;
const app = express()

app.use('/',(req:Request,res:Response)=>{
    res.send("Auth Server Up!!")
})


mongoose.connection.once(
    'open',()=>{
        console.log("MongoDB connected");
        app.listen(PORT, ()=>{
            console.log(`Book service running on port, ${PORT}`)
        })
    
    }
)