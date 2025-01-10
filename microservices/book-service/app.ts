import express from 'express';
import {router as BookRoute} from './src/routes/Books';
const PORT = 3002
const app = express()

app.use('/books',BookRoute);
app.listen(PORT, ()=>{
    console.log(`Book service running on port, ${PORT}`)
})