/*********************************************************************
 * Created by Anton Baksheiev on 15.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .factory('authService', authService)
    authService.$inject = ['$http', 'session'];

    function authService($http, session) {
        var authService = {};

        authService.login = function (credentials) {
            return $http
                .post('/login', credentials)
                .then(function (res) {
                    Session.create(res.data.id, res.data.user.id,
                        res.data.user.role);
                    return res.data.user;
                });
        };

        authService.isAuthenticated = function () {
            return !!Session.userId;
        };

        authService.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() &&
            authorizedRoles.indexOf(Session.userRole) !== -1);
        };

        return authService;
    }
})()