/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
// Controllers
//var categoryController = require('../controllers/categoryController.js');

//var contactController = require('../controllers/contactController.js');
var express = require('express');

// Define router
var router = express.Router();


    // MIDDLEWARE TO USE FOR ALL REQUESTS-------------
    router.use(function(req, res, next) {
        // do logging
        console.log('Something is happening.');
        next(); // make sure we go to the next routes and don't stop here
    });

    // CATEGORY ROUTES --------------------------------
     router
        .get('/categories/getAll',function(req, res) {
            res.json([{"title" :"CAR","id" :1},{"title" :"AUTO","id" :2},{"title" :"MOTOT","id" :3}]);
        });


    // CONTACT ROUTES --------------------------------
    router
        .get('/contact',function(req, res) {
            res.send('get contact');
        })
        .put('/contact',function(req, res) {
            res.send('put contact');
        })
        .post('/contact',function(req, res) {
            res.send('post contact');
        })
        .delete('/contact',function(req, res) {
            res.send('delete contact');
        });

    module.exports = router;
