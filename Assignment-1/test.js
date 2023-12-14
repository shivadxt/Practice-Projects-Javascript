// We are going to start working on express server and deep dive into each step

const express = require('express');
//Here we are declaring a variable express and giving all the power of express package to it 

const app = express();
//Here we've transfered all the power to app  variable


//Middleware:
//This runs before the routes are called and middleware can be of n numbers


app.use( function(req, res, next){
    console.log('Hello From Middleware');
    next();
    //If we call middleware our request JAMs and couldn't reaches to the route as 
    //middlewares are called befoe routes so to push it to next middleware or to routes
    //we use next()
}); 

app.use(function(req,res,next){
    console.log('Hello 2nd Middleawre');
    next();
})


app.get('/', function (req, res) {
    res.send('Hello World')
})
// Here we'e using one of the most importnt route that is GET route
// In this route you can have details of tas in the URL 
// '/' is the home route of any webpage or website that denotes it homepage
// google.com or google.com/ re the same things
// Next w're defining a function with (req, res) which are request and reponse
// Then we're returning a response using send function ('Hello World')

app.get('/b', function (req, res){
    res.send('Javascript Practice')
})

app.use(function(req,res,next){
    console.log('Hello B Middleawre');
    next();
})


app.get('/c', function(req, res){
    res.send('CD player')
})

app.use(function(req,res,next){
    console.log('Hello CD Middleawre');
    next();
})

// app.use() function is used to mount middleware functions in the application's 
//request processing pipeline. These middleware functions can be defined at any point 
//in your code, either before or after defining routes, or even in between routes. 
//The order in which middleware is defined matters as it determines the sequence in 
//which the middleware functions will be executed for incoming requests.

app.get('/e',function(req, res){
    res.send('Just testing Middleware')

})
  
app.listen(3000)