const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.post('/user', controller.createUser); 
//router.post('/logIn', controller.signIn);
module.exports = router;