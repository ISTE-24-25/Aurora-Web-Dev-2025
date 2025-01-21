const Payment = require("../models/payment.models");
const cloudinary = require("../utils/cloudinary");
const nodemailer = require("nodemailer");

const qrPaymentController = async (req, res) => {
    try {
        // Validate file
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Payment screenshot is required"
            });
        }

        const { name, email, phone, registrationNumber, transactionId } = req.body;

        // Validate input fields
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

        // Validate phone number format
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Invalid phone number format"
            });
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!allowedTypes.includes(req.file.mimetype)) {
            return res.status(400).json({
                success: false,
                message: "Only JPEG, JPG, and PNG files are allowed"
            });
        }

        // Check for duplicate transactionId
        const existingPayment = await Payment.findOne({ transactionId });
        if (existingPayment) {
            return res.status(400).json({
                success: false,
                message: "Transaction ID already exists"
            });
        }

        // Upload file to Cloudinary
        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "payment_images" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            uploadStream.end(req.file.buffer);
        });

        // Save payment to database
        const newPayment = new Payment({
            name,
            email,
            phone,
            registrationNumber,
            transactionId,
            imageUrl: result.secure_url
        });
        await newPayment.save();

        // Send email notification
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'workforabhinavkumar@gmail.com',
            subject: 'New Payment Received',
            text: `A new payment has been received.\n\nPayer Details:\n- Email: ${email}\n- Phone: ${phone}\n- Registration Number: ${registrationNumber}\n- Transaction ID: ${transactionId}`
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            message: "Payment processed successfully and email notification sent",
            data: newPayment
        });
    } catch (error) {
        console.error("Error processing payment:", error);
        res.status(500).json({
            success: false,
            message: "Error processing payment",
            error: error.message
        });
    }
};

module.exports = { qrPaymentController };
