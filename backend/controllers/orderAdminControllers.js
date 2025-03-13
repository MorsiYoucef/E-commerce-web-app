import {Order} from '../models/Order.js';
import {User} from '../models/User.js';

// Get all orders (admin only)
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'name email');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: 'Error fetching orders', error: error.message});
    }
};

// Get user orders
export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({user: req.userId});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: 'Error fetching user orders', error: error.message});
    }
};

// update order status
export const updateOrderStatus = async (req, res) => {
        try {
            const order = await Order.findById(req.params.id);
            if (!order) {
                return res.status(404).json({message: 'Order not found'});
            }
            if (order) {
                order.status = req.body.status || order.status;
                order.isDelivered =
                    req.body.status === "Delivered" ? true : order.isDelivered;
                order.deliveredAt =
                    req.body.status === "Delivered" ? Date.now() : order.deliveredAt;
                const updatedOrder = await order.save() ;
                res.json(updatedOrder);
            }
        } catch
            (error) {
            res.status(500).json({message: 'Error updating order status', error: error.message});
        }
    }
;

// Get order by ID
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params).populate('user', 'name email');
        if (!order) {
            return res.status(404).json({message: 'Order not found'});
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: 'Error fetching order', error: error.message});
    }
};


export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({message: 'Order not found'});
        }
        res.json({message: 'Order deleted successfully'});
    } catch (error) {
        res.status(500).json({message: 'Error deleting order', error: error.message});
    }
}























