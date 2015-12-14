/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/

var Category = require('../models/categoryModel.js');

// GET /api/v1/category/getAll
exports.getAll = function(req, res) {
    res.json([{"title" :"CAR","id" :1},{"title" :"AUTO","id" :2},{"title" :"MOTOT","id" :3}]);
};