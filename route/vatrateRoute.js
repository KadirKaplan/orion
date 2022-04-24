const express = require('express');
const vatrateController = require('../controller/vatrateController');
const router = express.Router();

router.route('/').get(vatrateController.getAllVatrates);
router.route('/').post(vatrateController.createVat);
router.route('/:_id').put(vatrateController.updateVatrate);
router.route('/:_id').delete(vatrateController.deleteVatrate);

module.exports = router;
