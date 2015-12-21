/*********************************************************************
 * Created by Anton Baksheiev on 21.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstName: String,
    lastName:String
});

var User   = mongoose.model('User', UserSchema);
module.exports = User;
