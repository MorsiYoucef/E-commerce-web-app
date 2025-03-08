import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {Product} from './models/Product.js';
import {User} from './models/User.js';
import {products} from './data/products.js';


dotenv.config();

mongoose.connect(process.env.MONGO_URL)

const seedData = async () => {
    try {
        // Clear existing data 
        await Product.deleteMany();
        await User.deleteMany();
        // Create a default admin User 
        const createdUser = await User.create({
            username: "Admin",
            email: "admin@example.com",
            password: "123456",
            role: "admin",
        });

        const userID = createdUser._id;
        const sampleProducts = products.map((product) => {
            return { ...product, user: userID };
        });
        // Insert the products into the database 
        await Product.insertMany(sampleProducts);
        console.log("Product data seeded successfully!");
        process.exit();
    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
     }
};

seedData();

