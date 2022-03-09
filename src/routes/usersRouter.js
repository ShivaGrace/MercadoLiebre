const express = require('express'); 
const router = express.Router(); 
const usersController = require('../controllers/usersController');

router.get('/registro', usersController.register);
router.get('/login', usersController.login); 

module.exports = router; 



