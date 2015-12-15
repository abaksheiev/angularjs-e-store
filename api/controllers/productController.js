/*********************************************************************
 * Created by Anton Baksheiev on 15.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
var Product = require('../models/productModel.js');

// GET /api/v1/category/getAll
exports.getAll = function (req, res) {
    res.json([
        {
            "id": 1,
            "title": "Lorem Ipsum",
            "shortDescr": "Mauris feugiat aliquam velit. Nunc placerat volutpat ante.",
            "price": "2.5"
        },
        {
            "id": 1,
            "title": "Lorem Ipsum",
            "shortDescr": "Mauris feugiat aliquam velit. Nunc placerat volutpat ante.",
            "price": "2.5"
        },
        {
            "id": 1,
            "title": "Lorem Ipsum",
            "shortDescr": "Mauris feugiat aliquam velit. Nunc placerat volutpat ante.",
            "price": "2.5"
        }]);
};


exports.getById = function (req, res) {
     res.json(
        {
            "id": 1,
            "title": "Lorem Ipsum",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lacus id faucibus vestibulum, nunc justo finibus sem, nec ultricies dolor nisl non eros. Nunc nulla velit, lacinia sed tellus quis, porta laoreet ante. Sed pharetra, purus ac mollis bibendum, justo velit rhoncus risus, nec gravida metus odio et nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam libero felis, sollicitudin quis ultricies et, iaculis at mi. Nulla eu elit turpis. Aenean non lacus dolor. Donec ornare magna est, molestie dapibus sapien feugiat sit amet. Donec dapibus nibh a justo aliquet elementum. Fusce eleifend libero at placerat accumsan. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dictum mauris augue, sit amet semper lectus interdum in. Mauris feugiat aliquam velit. Nunc placerat volutpat ante.",
            "price": "2.5"
        });
};
