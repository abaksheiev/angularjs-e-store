angular.module('eStoreApp', ['ngRoute'])
    .config(
        function ($routeProvider) {
            $routeProvider.
            when('/index.html', {
                templateUrl: 'public/partials/homePage.html',
                controller: 'homeController',
                controllerAs:'hm'
            }).
            when('/product/:productId', {
                templateUrl: 'partials/product-detail.html',
                controller: 'productController'
            }).
            otherwise({
                templateUrl: 'public/partials/homePage.html',
                controller: 'homeController',
                controllerAs:'vm'
            });
        });