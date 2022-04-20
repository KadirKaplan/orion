const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const pageController = require('../controller/pageController');

const router = express.Router();

router.route('/').get(pageController.getLoginPage);
router.route('/index').get(authMiddleware,pageController.getIndexPage);
router.route('/signup').get(pageController.getRegisterPage);
router.route('/login').get(pageController.getLoginPage);


module.exports = router;