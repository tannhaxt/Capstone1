const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Lấy tất cả người dùng
router.get('/', userController.getAllUsers);

module.exports = router;
