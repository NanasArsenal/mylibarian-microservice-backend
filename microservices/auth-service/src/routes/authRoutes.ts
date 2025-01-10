import express, { Request,Response,NextFunction } from 'express'
const AuthRoutes = express.Router()
import Userdb from '../mockdb';

AuthRoutes.post('/login',async(req:Request,res:Response)=>{
    const {username,password}= req.body;
    if(!username || !password){
         res.status(404).json("username and password required")
    }

    const user = Userdb.find(username);
    console.log(user);
    
})


export {AuthRoutes}