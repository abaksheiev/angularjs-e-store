/*********************************************************************
 * Created by Anton Baksheiev on 21.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
var User = require('/_github/angularjs-e-store/api/models/userModel');

module.exports.getAll = function () {
    //
// create a new user called category
    var user = new User();

    User.find(function (err, items) {
        if (err) {
            return exports.error(err);
        }

        return exports.data(items)
    });
    console.log('[getAll] user saved successfully!');

}

module.exports.get = function (userId) {
// create a new user called category
    var user = new User();

    user.findById(userId, function (err, item) {
        if (err) {
            return exports.error(err);
        }

        return exports.data(items)
    });

    console.log('[get] user saved successfully!');
};

module.exports.put = function (user) {
// create a new user called category
    var user = new User();

    user.firstName = user.name;  // set the bears name (comes from the request)
    user.lastName = user.lastName;


    var promise = user.save();

    promise.then(function (model) {
        if (model.errors) {
            return exports.error(model);
        }
        ;

        return exports.ok(model,"user was created")

    });

    return promise;
};

module.exports.post = function (err) {
// create a new user called category
    var user = new User();


    console.log('[post] user saved successfully!');
};

module.exports.delete = function (itemId) {
// create a new user called category
    var user = new User();

    user.remove({
        _id: itemId
    }, function (err, bear) {
        if (err) {
            return exports.error(err);
        }
        ;

        return this.ok("user was created")
    });

    console.log('[delete] user saved successfully!');
};

module.exports.error = function (model) {
    model.status = 1

}

module.exports.ok = function (model,msg) {
    model.status = 0;
model.message = msg
}

module.exports.data = function (data) {
    return {
        status: 0,
        data: data
    }
}
