
const fs = require('fs'); 
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/products.json'); 
let jsonProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    detail: (req, res) => {
        let id = req.params.id ;
        let productoEncontrado = null ; 
        for(let i= 0; i < jsonProducts.length ; i++){
            if(jsonProducts[i].id == id){
                productoEncontrado= jsonProducts[i] ;
                break
            }  
        }
        res.render('productDetail', {productoEncontrado: productoEncontrado});
    }, 
    listProducts: (req ,res) => {
        res.render('productList', {products: jsonProducts});
    }
};
 
console.log(jsonProducts); 
module.exports = productController ;