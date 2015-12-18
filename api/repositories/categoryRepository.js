/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
var mongoose = require('mongoose');

var db = mongoose.connection;
/*
db.on('error', console.error);
db.once('open', function() {
    // Create your schemas and models here.
});*/

mongoose.connect('mongodb://localhost/estore');


// if our user.js file is at app/models/user.js
var Category = require('/_github/angularjs-e-store/api/models/categoryModel');

exports.save = function(categoryItem){

    categoryItem.save(function (err, item) {
        if (err)
            console.log(err);
        else
            console.log(item);
    });
}