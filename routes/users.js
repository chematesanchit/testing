const express = require('express');
const router = express.Router();
const { userList } = require('../controllers/userCtrl');

router.get('/', userList); // Handles GET requests to /user

module.exports = router;
