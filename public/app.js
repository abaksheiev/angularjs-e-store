angular.module('eStoreApp', ['ngRoute'])
    .config(
        function ($routeProvider, $stateProvider, USER_ROLES) {
            $routeProvider.
            when('/index.html', {
                templateUrl: 'public/partials/homePage.html',
                controller: 'homeController',
                controllerAs: 'hm'
            }).
            when('/product/:productId', {
                templateUrl: 'partials/product-detail.html',
                controller: 'productController'
            }).
            otherwise({
                templateUrl: 'public/partials/homePage.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });


            $stateProvider.state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/index.html',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
                }
            });
        })
    .run(function ($rootScope, AUTH_EVENTS, authService) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            var authorizedRoles = next.data.authorizedRoles;
            if (!authService.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (authService.isAuthenticated()) {
                    // user is not allowed
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                } else {
                    // user is not logged in
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            }
        });
    });

