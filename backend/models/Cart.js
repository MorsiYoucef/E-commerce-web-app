import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
},
{_id: false}
);

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    guestId:{
        type: String
    },
    products: [cartItemSchema],
    totalPrice: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

// Pre-save middleware to calculate totals
// cartSchema.pre('save', function(next) {
//     // Calculate total price and total items
//     this.totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
//     this.totalPrice = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
//     this.updatedAt = Date.now();
//     next();
// });

export const Cart = mongoose.model('Cart', cartSchema);