/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
var categoryController = require('../controllers/categoryController.js');
var contactController = require('../controllers/contactController.js');
var productCtrl = require('../controllers/productController.js');
var userCtrl = require('../controllers/userController.js');


module.exports.registerRouters = function (router) {
// MOCK
    var authCtrl = {
        isAuthenticated: true
    }


// MIDDLEWARE TO USE FOR ALL REQUESTS-------------

// CATEGORY ROUTES --------------------------------
    router
        .get('/categories/getAll', function (req, res) {
            res.json([{"title": "CAR", "id": 1}, {"title": "AUTO", "id": 2}, {"title": "MOTOT", "id": 3}]);
        })
        .post('/category/:categoryId', function (req, res, next) {
            return categoryController.getById(req, res, next);
        });

// CONTACT ROUTES --------------------------------

    router
        .get('/contact', function (req, res) {
            res.send('get contact');
        })
        .put('/contact', function (req, res) {
            res.send('put contact');
        })
        .post('/contact', function (req, res) {
            res.send('post contact');
        })
        .delete('/contact', function (req, res) {
            res.send('delete contact');
        });

    router
        .get('/profile', function (req, res) {
            res.send({
                user: {
                    id: 1,
                    role: 'admin',
                    firstName: 'John',
                    lastName: 'Brown'
                }
            });
        })
// PRODUCT ROUTES --------------------------------

    router
        .get('/products/:product_id', productCtrl.getById);

    // USER ROUTES --------------------------------

    router
        .get('/users/all', userCtrl.getAll)
        .get('/users/:user_id', userCtrl.get)

        .post('/users/', userCtrl.post)

        .put('/users/', userCtrl.put)

        .delete('/users/:user_id', userCtrl.delete);
}

