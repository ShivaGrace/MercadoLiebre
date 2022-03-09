
const allProducts = [
     { id: 1 ,
name: "Cafetera moulinex" ,
description: "Producto con 5 años de uso, funciona perfectamente nunca tuvo ningun arreglo",
precio: 15000 ,
descuento: 10 ,
img: "img-cafetera-moulinex.jpg"

}, 
{
id: 2 ,
name: "Television Samsung 40 pulgadas" ,
description: "Nuevo, sin uso", 
precio: 50000 ,
descuento: 15 ,
img: "img-tv-samsung-smart.jpg"
}, 
{
id: 3, 
name: "iPhone 8 64gb" ,
description: "Usado, con bateria al 80%. Detalle en la parte trasera del dispositivo", 
precio: 35000 , 
descuento: 5 ,
img: "img-samsung-galaxy-s10.jpg"

}
]


const productController = {
    detail: (req, res) => {
        let id = req.params.id ;
        let productoEncontrado = null ; 
        for(let i= 0; i < allProducts.length ; i++){
            if(allProducts[i].id == id){
                productoEncontrado= allProducts[i] ;
                break
            }  
        }
        res.render('productDetail', {productoEncontrado: productoEncontrado});
    }, 
    listProducts: (req,res) => {
        res.render('productList')
    }
};
 

module.exports = productController ;