const express = require('express');
const bankController = require('../controller/bankController');
const router = express.Router();


router.route('/').get(bankController.getAllBank);
router.route('/').post(bankController.createBank);
router.route('/:_id').put(bankController.updateBank);
router.route('/:_id').delete(bankController.deleteBank);



module.exports = router;