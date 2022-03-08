const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products/detail', productController.detail);
router.get('/products/allProducts', productController.listProducts); 

module.exports = router; 