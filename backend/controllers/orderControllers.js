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
        const order = await Order.findById(req.params.id).populate("user", ["username", "email"])
        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" })
        }
        res.json(order)
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message })  
    }

}