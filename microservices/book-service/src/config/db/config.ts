import mongoose from "mongoose";
import { getEnvVar } from "../../utility/getEnvar";
import dotenv from 'dotenv';
dotenv.config();
const PORT = getEnvVar('PORT')
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// const dburl = getEnvVar('DB_URL');
export const DbConnection = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb+srv://nanakwekudev:R%40msys2012@mylibrary.ijwv1kz.mongodb.net/?retryWrites=true&w=majority&appName=MyLibrary");
        if(!connection){
            console.log('Error connecting to db');
        }
        console.log("DB connection established");
    } catch (error) {
        console.log("Error connecting",JSON.stringify(error))    

    }
}


