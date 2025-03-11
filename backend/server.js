import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import checkoutRoutes from './routes/checkoutRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


// apis
app.use('/api/users', userRoutes);  // Use user routes from routes/userRoutes.js
app.use("/api/products", productRoutes)
app.use('/api/carts', cartRoutes )
app.use('/api/checkouts', checkoutRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/uploads', uploadRoutes)  // Use upload routes from routes/uploadRoutes.js


app.listen(PORT, () => {
    connectDB();  // Connect to MongoDB database
    console.log(`Server is running on http://localhost:${PORT}`);
});