// server.js

// BASE SETUP
// =============================================================================
// load all models
//var fs = require('fs');

//fs.readdirSync(__dirname + '/api/models').forEach(function(fileName){
//    if(~fileName.indexOf('.js')){
//        require(__dirname + 'api/models'+fileName);
//    }
//})

// call the packages we need
var express = require('express');        // call express
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();// define our app using express
var router = express.Router();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// API
var apiRouter = require(__dirname + '/api/routers/api.js');

router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

apiRouter.registerRouters(router)

app.use('/api/v1', router);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.use('/public', express.static(__dirname + '/public'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/content', express.static(__dirname + '/content'));

app.use('/SpecRunner.html', express.static(__dirname + '/tests/SpecRunner.html'));
app.use('/tests', express.static(__dirname + '/tests'));

app.use('/index.html', express.static(__dirname + '/public/index.html'));
app.use('/info.html', express.static(__dirname + '/public/info.html'));

app.use('/admin/index.html', express.static(__dirname + '/public/admin/index.html'));
app.use('/admin/#:route', express.static(__dirname + '/public/admin/index.html'));

// all development only
//'development' == app.get(env)
  if(true){
    //  app.use(express.errorHandler());
    mongoose.connect('mongodb://localhost/estore');
 }


// START THE SERVER
// =============================================================================
app.listen('8081', function () {
    console.log('Magic happens on port 8080');
});
