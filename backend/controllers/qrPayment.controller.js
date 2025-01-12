const Payment = require("../models/payment.models");
const cloudinary = require("../utils/cloudinary");

const qrPaymentController = async (req, res, next) => {
    try {
        // Input validation
        if (!req.file) {
            return res.status(400).json({ 
                success: false, 
                message: "Payment screenshot is required" 
            });
        }

        const { name, email, phone, registrationNumber, transactionId } = req.body;

        // Check required fields
        if (!name || !email || !phone || !registrationNumber || !transactionId) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            });
        }

        // Validate phone number (assuming 10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Invalid phone number format"
            });
        }

        // Check file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedTypes.includes(req.file.mimetype)) {
            return res.status(400).json({
                success: false,
                message: "Only .jpg, .jpeg and .png files are allowed"
            });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "user-images",
            resource_type: "image"
        });

        // Check if payment with same transactionId exists
        const existingPayment = await Payment.findOne({ transactionId });
        if (existingPayment) {
            return res.status(400).json({
                success: false,
                message: "Transaction ID already exists"
            });
        }

        const newPayment = new Payment({
            name,
            email,
            phone,
            registrationNumber,
            transactionId,
            imageUrl: result.secure_url,
        });

        await newPayment.save();

        res.status(201).json({ 
            success: true,
            message: "Payment processed successfully",
            data: newPayment 
        });

    } catch (error) {
        console.error("Payment processing error:", error);
        return res.status(500).json({
            success: false,
            message: "Error processing payment",
            error: error.message
        });
    }
};

module.exports = { qrPaymentController };