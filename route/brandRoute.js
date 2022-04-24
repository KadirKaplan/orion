const express = require('express');
const brandController = require('../controller/brandController');

const router = express.Router();

router.route('/').get(brandController.getAllBrands);
router.route('/').post(brandController.createBrand);
router.route('/:_id').put(brandController.updateBrand);
router.route('/:_id').delete(brandController.deleteBrand);

module.exports = router;
