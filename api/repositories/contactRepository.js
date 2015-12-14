/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/

var Contact = require('./api/models/contactModel.js');

// create a new user called category
var contact = new Contact( );

contact.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});