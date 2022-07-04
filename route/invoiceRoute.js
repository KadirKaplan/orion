const express = require('express');
const invoiceController = require('../controller/invoiceController');
const router = express.Router();

router.route('/').get(invoiceController.getAllInvoices);
router.route('/').post(invoiceController.createInvoice);

module.exports = router;