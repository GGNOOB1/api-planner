const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router
    .route('/')
    .post(userController.signUp)
    .post(userController.signIn)
    .put(userController.updateUser);

module.exports = router;
