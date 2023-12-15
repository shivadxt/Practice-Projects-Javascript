const express = require ('express');

const app = express();

app.use(function(req, res,next){
    console.log('hello middleware')
    next();
});

app.get('/',function(req,res){
    res.send('hello 2nd test');
});

app.listen(3002);