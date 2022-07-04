const express = require('express');
const warehouseController = require('../controller/warehouseController');
const router = express.Router();

router.route('/').get(warehouseController.getAllWarehouses);
router.route('/').post(warehouseController.createWarehouse);
router.route('/:_id').put(warehouseController.updateWarehouse);
router.route('/:_id').delete(warehouseController.deleteWarehouse);


module.exports =  router;