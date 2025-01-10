import express,{Request,Response} from 'express'
import { AuthRoutes } from './src/routes/authRoutes'
const PORT = 3001

const app = express()

app.use('/',(req:Request,res:Response)=>{
    res.send("Auth Server Up!!")
})

app.use('auth',AuthRoutes)

app.listen(PORT , ()=>{ console.log(`Auth service running on port ${PORT}`)})