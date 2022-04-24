const express = require('express');
const categoryController = require('../controller/categoryController');

const router = express.Router();

router.route('/').get(categoryController.getAllCategory);
router.route('/').post(categoryController.createCategory);
router.route('/:_id').put(categoryController.updatecategory);
router.route('/:_id').delete(categoryController.deleteCategory);
module.exports = router;