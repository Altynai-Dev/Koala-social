import express from "express";
const app = express();
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import commentsRoutes from './routes/comments.js';
import likesRoutes from './routes/likes.js';
import relationshipRoutes from './routes/relationships.js';
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from 'multer';


//middleware
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(cookieParser());
//app.use('../client/public/upload', express.static('upload'))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
  });

// const storage = multer.diskStorage({
//     destination: (_, __, cb)=>{
//         cb(null, "uploads")
//     },
//     filename: (_, file, cb)=>{
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({ storage: storage });

// app.post("/api/upload", upload.single("file"), (req, res) => {
//     // const file = req.file;
//     // res.status(200).json(file.filename);
//     res.json({
//         url: `uploads/${req.file.originalname}`
//     })
// });

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/likes', likesRoutes);
app.use("/api/relationships", relationshipRoutes);

app.get('/', (req, res)=>{
    res.send('working good')
})
app.listen(8888, ()=>{
    console.log("API start")
})