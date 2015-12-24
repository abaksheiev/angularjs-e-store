/*********************************************************************
 * Created by Anton Baksheiev on 21.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
var User = require('/_github/angularjs-e-store/api/models/userModel');

module.exports.getAll = function (ok, error) {

    User.find(function (_error, _data) {
        if (_error) {
            error(_error);
        } else {
            ok(_data);
        }
    });
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

module.exports.put = function (user, ok, failed) {

    User.findOne({_id: user._id}, function (_error, item) {
        if (_error) {
            return failed(_error);
        } else {
            item.firstName = user.firstName;
            item.lastName = user.lastName;
            item.save();

            ok(item);
        }
    });
};

module.exports.post = function (user, ok, faile) {
    // get byId. override all properties
    // create a new user called category
    var user = new User(user);

    user.save(function (_error, _data) {
        if (_error) {
            return failed(_error);
        } else {
            ok(_data);
        }
    });
};

module.exports.getById = function (itemId, ok, failed) {

    User.find({
        _id: itemId
    }, function (_error, _data) {
        if (_error) {
            return failed(_error);
        } else {
            ok(_data);
        }
    });
};

module.exports.delete = function (itemId, ok, failed) {
    User.find({
            _id: itemId
        })
        .remove(function (_error, _data) {
            if (_error) {
                return failed(_error);
            } else {
                return ok(_data)
            }
        });
};

module.exports.error = function (model, msg) {
    model.status = 1
    model.message = msg;
}

module.exports.ok = function (model, msg) {
    model.status = 0;
    model.message = msg
}

module.exports.data = function (model) {
    model.status = 0;
    model.data = data
}
