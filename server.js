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

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here
router.route('/categories/getAll')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {


    })
    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
         res.json([{"title" :"CAR","id" :1},{"title" :"AUTO","id" :2},{"title" :"MOTOT","id" :3}]);
     });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use('/public',express.static(__dirname + '/public'));

app.use('/bower_components',express.static(__dirname + '/bower_components'));
app.use('/content',express.static(__dirname + '/content'));

app.use('/SpecRunner.html',express.static(__dirname + '/tests/SpecRunner.html'));
app.use('/tests',express.static(__dirname + '/tests'));

app.use('/index.html', express.static(__dirname + '/public/index.html'));
app.use('/info.html', express.static(__dirname + '/public/info.html'));

app.use('/api', router);
// START THE SERVER
// =============================================================================
app.listen('8081', function() {
    console.log('Magic happens on port 8080 ');
});
