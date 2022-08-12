const express = require('express'); //iportation d'express
const app = express (); // init express 

app.listen(3500, function(){
    console.log('server started successfuly');
})

app.get('/toto', function(req, res){
    res.send('Hello toto');
});

app.get('/isig', function(req, res){
    res.send('fier et plein de dignite')
})