/*********************************************************************
 * Created by Anton Baksheiev on 15.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$rootScope', 'AUTH_EVENTS', 'authService'];

    function loginController($scope, $rootScope, AUTH_EVENTS, authService) {
        var vm = this;

        angular.extend(vm, {
            credentials: {
                username: '',
                password: ''
            },
            login: login
        });


        function login(credentials) {
            authService.login(credentials).then(function (user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                vm.setCurrentUser(user);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
    }
})();