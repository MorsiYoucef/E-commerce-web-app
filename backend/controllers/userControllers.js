import { User } from '../models/User.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from '../utils/generateToken.js';
import dotenv from 'dotenv'

dotenv.config()


export const register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log("body data:", username, email, password)

    try {

        if (!email || !password || !username) {
            throw new Error("All fields are required");
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        const token = generateTokenAndSetCookie(res, user._id, user.role);


        res.status(201).json({
            message: 'User created successfully',
            user: {
                ...user._doc,
                password: undefined,
            },
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ success: false, message: 'User Not Found' });

        console.log("Password from request:", password);
        console.log("Hashed password from DB:", user.password);

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid Credentials' });

        const token = generateTokenAndSetCookie(res, user._id, user.role)

        return res.status(200).json({
            sucess: true, message: "user Loged in successfully",
            user: {
                ...user._doc,
                password: undefined,
            },
            token: token
        })

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: false, message: 'Login Failed', error: error.message });
    }
}

export const profile = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        console.log("Error in checkAuth ", error);
        res.status(400).json({ success: false, message: error.message });
    }
}