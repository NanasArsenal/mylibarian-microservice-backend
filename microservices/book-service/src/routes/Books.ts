import express,{Request,Response} from 'express'
const router = express.Router();


router.get("/", (req, res) => {
    res.json({ books: [{ id: 1,userID:"nanakwekudev@gmail.com", booktitle: "John Doe" }, { id: 1,userID:"nanakwekudev@gmail.com", booktitle: "John Doe" }] });
});

router.post("/upload",async (req:Request,res:Response)=>{

}) 

router.delete("/delete",async (req:Request,res:Response)=>{

}) 
export {router}