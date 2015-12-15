/*********************************************************************
 * Created by Anton Baksheiev on 15.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
// if our user.js file is at app/models/user.js
var Product = require('./api/models/productModel.js');

// create a new user called category
var product = new Product( );

product.save(function(err) {
    if (err) throw err;

    console.log('product saved successfully!');
});