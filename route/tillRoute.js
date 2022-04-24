const express = require('express');
const tillController = require('../controller/tillController');
const router = express.Router();


router.route('/').get(tillController.getAllTills);
router.route('/').post(tillController.createTill);
router.route('/:_id').put(tillController.updateTill);
router.route('/:_id').delete(tillController.deleteTill);


module.exports = router;