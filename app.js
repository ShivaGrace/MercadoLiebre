const express = require('express'); 
const app = express();
const path = require('path'); 
const mainRoutes = require('./src/routes/mainRouter');
const productRoutes = require('./src/routes/productRouter'); 
const userRoutes = require('./src/routes/usersRouter');
/*const mainController = require('./src/controllers/mainController');
const productController = require('./src/controllers/productController'); 
const usersController = require('./src/controllers/usersController'); */



app.set("view engine", "ejs"); 
app.use(express.static(path.join(__dirname , './public'))) ; 
app.use('/' , mainRoutes);
app.use('/products' , productRoutes);
app.use('/users' , userRoutes); 
app.listen(process.env.PORT || 3000, function(){
    console.log('servidor corriendo en el puerto 3000');
});
