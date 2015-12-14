/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var categorySchema = new Schema({
    title: String
    });

// the schema is useless so far
// we need to create a model using it
var Category = mongoose.model('Category', categorySchema);

// make this available to our users in our Node applications
module.exports = Category;