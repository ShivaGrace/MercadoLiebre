const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.listProducts);
router.get('/detail/:id', productController.detail);
 

module.exports = router; 