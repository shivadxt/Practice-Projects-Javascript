//Dynamic Routing in Express
//When a certain part in url remains same and only one part changes in that condition
//we use dynamic routing 
//Examples:
//home/profile/ankit
//home/profile/ankita
//home/profile/anshika
const express = require ('express');

const app = express();

app.get('/',function(req,res){
    res.send('hello from home');
})

//this is  static route
app.get('/profile/ankit',function(req,res){
    res.send("Hello from Ankit");

})


//this is a dynamic route
app.get('/profile/:username', function(req,res){
    res.send(`hello from ${req.params.username}`);
    console.log(req.params.username);

})

app.listen(2001);