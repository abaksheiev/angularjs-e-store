// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API
var apiRouter = require(__dirname +'/api/routers/api.js');
app.use('/api/', apiRouter);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});
app.use('/public',express.static(__dirname + '/public'));

app.use('/bower_components',express.static(__dirname + '/bower_components'));
app.use('/content',express.static(__dirname + '/content'));

app.use('/SpecRunner.html',express.static(__dirname + '/tests/SpecRunner.html'));
app.use('/tests',express.static(__dirname + '/tests'));

app.use('/index.html', express.static(__dirname + '/public/index.html'));
app.use('/info.html', express.static(__dirname + '/public/info.html'));

 // START THE SERVER
// =============================================================================
app.listen('8080', function() {
    console.log('Magic happens on port 8080 ');
});
