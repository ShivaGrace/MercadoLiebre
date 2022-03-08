const express = require('express'); 
const app = express();
const path = require('path'); 
const mainController = require('./src/controllers/mainController'); 
const rutasMain = require('./src/routes/mainRouter');

app.set("view engine", "ejs"); 
app.use(express.static(path.join(__dirname , './public'))) ; 
app.use('/' , rutasMain);
app.listen(process.env.PORT || 3000, function(){
    console.log('servidor corriendo en el puerto 3000');
});
