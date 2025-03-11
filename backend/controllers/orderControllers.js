import { Order } from "../models/Order.js"


export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.userId }).sort({
            createdAt: -1
        })
        res.json(orders)
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message })  
    }
}

export const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("user", ["username", "email"]) // populate() here is to: Retrieve Related Data: Instead of just getting the user's ID in the order document, you get the actual user data (username and email) in a single query.
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" })
        }
        res.json(order)
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message })  
    }

}

