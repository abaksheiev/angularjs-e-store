angular
    .module('eStoreApp', [])

angular
    .module('eStoreApp.data', [])

angular.module('eStoreApp.admin', ['ngRoute', 'eStoreApp.data'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/users/:userId', {
                    templateUrl: '../public/admin/userComponent/views/userDetails.html',
                    controller: 'eStoreApp.admin.userController',
                    controllerAs: 'vm'
                })
                .when('/users/', {
                    templateUrl: '../public/admin/userComponent/views/userList.html',
                    controller: 'eStoreApp.admin.userController',
                    controllerAs: 'vm'
                })
                .when('/admin/index.html', {
                    templateUrl: '../public/admin/userComponent/views/userList.html',
                    controller: 'eStoreApp.admin.userController',
                    controllerAs: 'vm'
                }).
            otherwise({
                templateUrl: '../public/admin/userComponent/views/userList.html',
                controller: 'eStoreApp.admin.userController',
                controllerAs: 'vm'
            });
            //  authService.profile()
        }]);

