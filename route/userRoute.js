const express = require('express');
const authController = require('../controller/authController');

const router = express.Router();



router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/signup').post(authController.createUser);
router.route('/:_id').get(authController.getUserInfo);
module.exports = router;