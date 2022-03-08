
const productController = {
    detail: (req, res) => {
        res.render('productDetail')
    }, 
    listProducts: (req,res) => {
        res.render('productList')
    }
};

module.exports = productController ;