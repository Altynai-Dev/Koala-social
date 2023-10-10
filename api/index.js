import Express from "express";
const app = Express();
import userRoutes from './routes/users.js'


app.use('/api/users', userRoutes)

app.listen(8888, ()=>{
    console.log("API start")
})