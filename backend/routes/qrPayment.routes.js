const express = require("express");
const multer = require("multer");
const { qrPaymentController } = require("../controllers/qrPayment.controller");
const router = express.Router();
// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });




router.post("/", upload.single("image"), qrPaymentController);

module.exports = router;
