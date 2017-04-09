// modules =================================================
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 3000;

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'client')));

app.use("*", function(req,res){
    console.log('requesting ' + req.originalUrl);
    res.sendFile(path.join(__dirname,'client/index.html'));
});

app.use(function(req,res){
    res.sendFile(path.join(__dirname,'client/errors/404.html'));
});

app.listen(port, function () {
    console.log('listening on port ' + port);
});