/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/

var categoryRategory = require('../repositories/categoryRepository.js');
var Category = require('/_github/angularjs-e-store/api/models/categoryModel')
exports.getAll = function (req, res, next) {
    res.json([{"title": "CAR", "id": 1}, {"title": "AUTO", "id": 2}, {"title": "MOTOT", "id": 3}]);
};

exports.save = function (req, res, next) {
    var title = req.body.title;


    var categoryItem = new Category({
        title: req.body.title
    })

    var msg = categoryRategory.save(categoryItem)

    if (msg === undefined) {
        res.send('ok')
    } else {
        res.send('error')
    }

};
/*
 exports.getById = function (req, res, next) {
 Category.findById(req.params.id, function (err, item) {
 if (err) res.send(err); =
 res.json(item);
 });
 };
 */