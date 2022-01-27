const express = require('express'); 
const app = express();
const path = require('path'); 

app.listen(3009, function(){
    console.log('servidor corriendo');
});
app.use(express.static(path.join(__dirname , './public'))) ; 
app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/views/home.html'); 
}) ;
app.get('/registro',(req, res) => {
    res.sendFile(__dirname + '/views/registro.html');
});
