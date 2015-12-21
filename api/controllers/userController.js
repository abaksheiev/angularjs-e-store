/*********************************************************************
 * Created by Anton Baksheiev on 21.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
var userRepository = require('/_github/angularjs-e-store/api/repositories/userRepository');


module.exports.getAll = getAll;

function getAll(req, res) {

    var result = userRepository.getAll();

    if (result.status == 1) {
        res.send(result.err)
    } else {
        res.json(result.message);
    }
}

module.exports.get = _get;
function _get(req, res) {
    var userId = req.params.user_id
    var result = userRepository.get(userId);

    if (result.status == 1) {
        res.send(result.err)
    } else {
        res.json(result.message);
    }
}

module.exports.post = _post
function _post(req, res) {
    // combine new user item
    var user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    //todo: validation

    var result = userRepository.post(user);

    if (result.status == 1) {
        res.send(result.err)
    } else {
        res.json(result.message);
    }
}

module.exports.put = _put
function _put(req, res) {
    // combine new user item
    var user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    //todo: validation

    userRepository
        .put(user)
        .then(function (result) {

            if (result.status == 1) {
                res.send(result.err)
            } else {
                res.json(result.message);
            }
        });

}

module.exports.delete = _delete;
function _delete(req, res) {
    var userId = req.params.user_id;

    var result = userRepository.delete(userId);

    if (result.status == 1) {
        res.send(result.err)
    } else {
        res.json(result.message);
    }
}