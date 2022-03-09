const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.listProducts);
router.get('/detail/:id', productController.detail);

/*router.get('/create', productController.creation);
router.post('/create', productController.create);


router.delete('/detail/:id', productController.delete); 

router.put('/edit/:id', productController.edit); */

module.exports = router; 