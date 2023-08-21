import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js'
import postRouter from './routes/postRoute.js'
dotenv.config()
const app = express();
const PORT = process.env.PORT 
const CONNECTION_URL = process.env.CONNECTION_URL
// npm install mongoose dotenv cors
//cors for used for cross environment like react is hosting in another server node hosting in another server 

app.use(express.json())
app.use(express.urlencoded({ extended:false}))
app.use(cors())


//http://localhost:5000/users
app.use('/users',userRouter)
//http://localhost:5000/posts
app.use('/posts',postRouter)


app.get('/', (req, res) => {
    res.send(`<h1>HIIII SHANKAR</h1>`)
})



//connect database
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>app.listen(PORT,console.log("you are listening on port: " + PORT)))
.catch((err)=>console.log(`Error connecting :${err}`))







