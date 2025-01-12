const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    transactionId: { type: String, required: true },
    imageUrl: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Payment", PaymentSchema);
