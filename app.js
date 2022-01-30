const express = require('express'); 
const app = express();
const path = require('path'); 

app.listen(process.env.PORT || 3009, function(){
    console.log('servidor corriendo en el puerto 3009');
});
app.use(express.static(path.join(__dirname , './public'))) ; 
app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/views/home.html'); 
}) ;
app.get('/registro',(req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login',(req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});