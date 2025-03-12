import express from "express";
import { Subscriber } from '../models/Subscriber.js'

const router = express.Router();

router.post('/subscribe', async (req, res) => {
    const {email} = req.body;
    if (!email) {
        return res.status(400).json({message: 'Please provide an email address.'});
    }
    try {
        let subscriber = await Subscriber.findOne({email});
        if (subscriber) {
            return res.status(400).json({message: 'Email already exists.'});
        }
        // Create a new subscriber
        subscriber = new Subscriber({email});
        await subscriber.save();

        res.status(201).json({message: 'Email subscription successful.'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error.'});
    }
})

export default router;


















