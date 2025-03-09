import { Checkout } from "../models/Checkout.js"
import {Order} from '../models/Order.js'
import {Product} from '../models/Product.js'
import {Cart} from '../models/Cart.js'


export const createCheckout = async (req, res) => {
    const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body

    if (!checkoutItems || checkoutItems.length === 0) {
        return res.status(400).json({ message: 'No checkout items found' });
    }
    try {
        const newCheckout = new Checkout({
            user: req.userId,
            checkoutItems: checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus: 'pending',
            isPaid: false
        });
        await newCheckout.save();
        res.status(201).json(newCheckout);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });

    }

}

export const updateCheckout = async (req, res) => {
    const { paymentStatus, paymentDetails } = req.body;

    try {
        const checkout = await Checkout.findById(req.params.id);

        if (!checkout) {
            return res.status(404).json({ message: 'Checkout not found' });
        }

        if( paymentStatus === "paid"){
            checkout.isPaid = true;
            checkout.paymentStatus = paymentStatus;
            checkout.paymentDetails = paymentDetails;
            checkout.paidAt = new Date();

            await checkout.save();
            res.status(200).json(checkout);
        }else{
            res.status(400).json({ message: 'Invalid payment status' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });        
    }
}

export const finalCheckout = async (req, res) => {

    try {
        const checkout = await Checkout.findById(req.params.id);
        if (!checkout) {
            return res.status(404).json({ message: 'Checkout not found' });
        }
        if(checkout.isPaid && !checkout.isFinalized){
            const finalOrder = await Order.create({
                user: checkout.user,
                orderItems: checkout.checkoutItems,
                shippingAddress: checkout.shippingAddress,
                paymentMethod: checkout.paymentMethod,
                totalPrice: checkout.totalPrice,
                isDelivered: false,
                isPaid: true,
                paidAt: checkout.paidAt,
                paymentStatus: "paid",
                paymentDetails: checkout.paymentDetails,
            });
            // mark the checkout as finalized
            checkout.isFinalized = true;
            checkout.finalizedAt = new Date();
            await checkout.save();

            //delete the cart associated with the user
            await Cart.findOneAndDelete({user: checkout.user})
            res.status(200).json(finalOrder);
        }else if(checkout.isFinalized){
            res.status(400).json({ message: 'Checkout already finalized' });
            
        }else{
            res.status(400).json({ message: 'Checkout not paid' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
        
    }

}