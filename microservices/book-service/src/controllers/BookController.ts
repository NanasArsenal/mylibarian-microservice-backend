import {Request,Response,NextFunction} from 'express';

export const GetAllBooks = async (req:Request, res:Response ,next:NextFunction ) =>{
        try {
             res.json({message:"Success"})   
        } catch (error) {
            next(error)    
        }
}
