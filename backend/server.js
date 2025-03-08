import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());






app.get("/", (req, res) => {
    res.send("WELCOME TO RABBIT API!");
});

app.use('/api/users', userRoutes);  // Use user routes from routes/userRoutes.js
app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB();  // Connect to MongoDB database
    console.log(`Server is running on http://localhost:${PORT}`);
});