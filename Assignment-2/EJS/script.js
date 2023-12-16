//Learn about Ejs
const express = require ("express");

const app = express();

app.set("view engine", "ejs");

app.get('/', function(req,res){
    res.send("Hey Budddy Light Weight")
});

app.get('/contact', function(req,res){
    res.render("index");
});

app.listen(4001);