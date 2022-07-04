const express = require('express');
const bankAccountController = require('../controller/bankaccountsController');
const router = express.Router();


router.route('/').get(bankAccountController.getAllBankAccount);
router.route('/').post(bankAccountController.createBankAccount);
router.route('/:_id').put(bankAccountController.updateBankAccount);
router.route('/:_id').delete(bankAccountController.deleteBankAccount);



module.exports = router;