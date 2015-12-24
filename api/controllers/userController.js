/*********************************************************************
 * Created by Anton Baksheiev on 21.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
var userRepository = require('/_github/angularjs-e-store/api/repositories/userRepository');


module.exports.getAll = getAll;
module.exports.getById = _getById;
module.exports.post = _post;
module.exports.put = _put;
module.exports.delete = _delete;

function getAll(req, res) {

    userRepository
        .getAll(function (err) {
            return res.send(err)
        }, function (data) {
            return res.json(data);
        });
}

function _getById(req, res) {
    var userId = req.params.user_id
    userRepository
        .getById(userId,
            function (err) {
                return res.send(err)
            }, function (data) {
                return res.json(data);
            });
}

function _post(req, res) {
    // combine new user item
    var user = {
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    //todo: validation

    userRepository.post(user,
        function (err) {
            return res.send(err)
        }, function (data) {
            return res.json(data);
        });
}


function _put(req, res) {
    var user = {
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    //todo: validation

    userRepository.put(
        user,
        function (err) {
            return res.send(err)
        }, function (data) {
            return res.json(data);
        });
}

function _delete(req, res) {
    var userId = req.params.user_id;

    userRepository.delete(
        userId,
        function (err) {
            return res.send(err)
        }, function (data) {
            return res.json(data);
        });
}