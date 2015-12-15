angular.module('eStoreApp', ['ngRoute'])
    .config(['$routeProvider', 'USER_ROLES',
        function ($routeProvider, USER_ROLES) {
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
                controllerAs: 'vm',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
                }
            });
            //  authService.profile()
        }])
    .run(['$rootScope', 'AUTH_EVENTS', '$location', 'authService',
        function ($rootScope, AUTH_EVENTS, $location, authService) {

            $rootScope.$on('$locationChangeStart', function (event, next) {
                if (!authService.isAuthenticated()) {
                    event.defaultPrevented = true;
                    //If login data not available, make sure we request for it
                    authService
                        .profile().then(function () {
                        $location.path(' ');
                        event.defaultPrevented = false;
                        $rootScope.$on('$routeChangeStart', routeChangeStart)
                        $location.path('/');

                    })
                }
            });


            function routeChangeStart(event, next) {
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
            }

            ;
        }]);

