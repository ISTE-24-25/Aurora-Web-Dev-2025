const express = require("express");
const multer = require("multer");
const { qrPaymentController } = require("../controllers/qrPayment.controller");
const router = express.Router();
// Multer configuration
const upload = multer({ dest: "uploads/" }); // Temporary storage



router.post("/", upload.single("image"), qrPaymentController);

module.exports = router;
