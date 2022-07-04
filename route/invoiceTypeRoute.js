const express = require('express');
const InvoceTypeController = require('../controller/invoiceTypeController');
const router = express.Router();

router.route('/').post(InvoceTypeController.createInvoiceType);
router.route('/').get(InvoceTypeController.getAllInvoiceType);

module.exports = router;