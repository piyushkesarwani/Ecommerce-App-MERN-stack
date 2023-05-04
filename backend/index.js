import express from 'express'
import cors from 'cors';
import postRouter from './routes/auth.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', postRouter)

app.listen(8800, () => {
    console.log("App is Connected!");
})