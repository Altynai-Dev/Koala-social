import express from "express";
const app = express();
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cors from "cors";
import cookieParser from "cookie-parser";

//middleware
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
});

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res)=>{
    res.send('working good')
})
app.listen(8888, ()=>{
    console.log("API start")
})