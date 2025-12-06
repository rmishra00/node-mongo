import express from 'express';
import 'dotenv/config';
import {connectMongoDB} from './connection.js';
import userRouter from './routes/user.routes.js'

const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(express.json());

connectMongoDB(process.env.MONGODB_URL).then(()=>{
  console.log("MongoDB connected");
});
app.use('/user', userRouter);

app.listen(PORT, ()=>{
  console.log('server is running on PORT ', PORT);
  
})