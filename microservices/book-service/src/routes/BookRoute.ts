import express,{Router} from 'express';
import { GetAllBooks } from '../controllers/BookController';
const BookRouter = Router()

BookRouter.get('/',GetAllBooks)

export default BookRouter 