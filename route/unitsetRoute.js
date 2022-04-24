const { Router } = require('express');
const express = require('express');
const unitsetcontroller = require('../controller/unitsetController');
const router = express.Router();

router.route('/').get(unitsetcontroller.getAllUnitset);
router.route('/').post(unitsetcontroller.createUnitset);
router.route('/:_id').put(unitsetcontroller.updateUnitset);
router.route('/:_id').delete(unitsetcontroller.deleteUnitset);

module.exports = router;