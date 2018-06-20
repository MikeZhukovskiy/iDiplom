var express = require("express");

var bodyParser = require('body-parser');

var app = express();
 
app.use(express.static(__dirname + "/"));

app.use(express.static(__dirname + "/news"));

app.use(express.static(__dirname + "/services"));

app.use(express.static(__dirname + "/guarantees"));

app.use(express.static(__dirname + "/about"));

app.use(express.static(__dirname + "/admin"));


 
app.get("/", function(request, response){
     
    response.send();
});

app.get("/news", function(request, response){
     
    response.send();
});

app.get("/services", function(request, response){
     
    response.send();
});

app.get("/guarantees", function(request, response){
     
    response.send();
});

app.get("/about", function(request, response){
     
    response.send();
});

app.get("/admin", function(request, response){
     
    response.send();
});

app.listen(3000, () =>{
	console.log("Сервак фурычет");
});