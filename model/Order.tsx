const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    userID: {type: String, required: true},
    products: [
        {productID:{type: String}},
        {quantity:{type: Number, default: 1}}
    ],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'pending' ,required: true }
}, {timestamps: true})
export default mongoose.model("Order", OrderSchema);