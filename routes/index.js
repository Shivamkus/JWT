const express = require('express');
const { registerUser, loginUser, getUser } = require('../controller/userController');
const { userRegisterVAlidate, userLoginVAlidate } = require('../utils/userValidaation');
const { ensureAuthenticated } = require('../utils/auth');
const router = express.Router();


router.post('/register', userRegisterVAlidate, registerUser);

router.post('/login', userLoginVAlidate, loginUser);

router.get('/users', ensureAuthenticated, getUser )

module.exports = router;