/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/

// if our user.js file is at app/models/user.js
var Category = require('./api/models/categoryModel.js');

// create a new user called category
var category = new Category( );

 category.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});