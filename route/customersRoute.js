const express  = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const customerController = require('../controller/customerController');


const router = express.Router();

router.route('/').post(authMiddleware,customerController.createCustomer);
router.route('/').get(authMiddleware,customerController.getAllCustomers);
router.route('/:slug').delete(authMiddleware,customerController.deleteCustomer);
router.route('/:slug').put(authMiddleware,customerController.updateCustomer);
module.exports = router;