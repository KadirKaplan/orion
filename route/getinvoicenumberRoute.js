const express = require('express');
const invoiceController = require('../controller/invoiceController');
const router = express.Router();

router.route('/').get(invoiceController.getOneInvoiceNumber);

module.exports = router;