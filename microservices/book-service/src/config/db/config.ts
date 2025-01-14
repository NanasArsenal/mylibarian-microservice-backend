import mongoose from "mongoose";
import { getEnvVar } from "../../utility/getEnvar";
import dotenv from 'dotenv';

dotenv.config();
const dburl = getEnvVar('DB_URL');
export const DbConnection = async ()=>{
    try {
        const connection = await mongoose.connect(dburl)
        if(!connection){
            console.log('Error connecting to db');
        }
        console.log("DB connection established");
    } catch (error) {
        throw new Error
    }


}