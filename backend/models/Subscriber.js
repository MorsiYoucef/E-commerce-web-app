import mongoose from "mongoose";
const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
})
export const Subscriber = mongoose.model('Subscriber', subscriberSchema);
// module.exports = mongoose.model("Subscriber", subscriberSchema)
