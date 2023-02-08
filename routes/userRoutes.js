const express = require('express');
const router = express.Router();
const validateUser = require('../validations/userValidators');

const userController = require('../controllers/userController');

router.post('/signUp', validateUser.validateUser, userController.signUp);
router.post('/signIn', validateUser.validateLogin, userController.signIn);
router.put('/:id', validateUser.validateUser, userController.updateUser);

module.exports = router;
