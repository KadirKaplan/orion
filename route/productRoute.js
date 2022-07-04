const express  = require('express');
const productController = require('../controller/productController');

const router = express.Router();
debugger;
router.route('/').get(productController.getAllProducts);
router.route('/').post(productController.createProduct);
router.route('/:_id').get(productController.getProduct);
module.exports = router;