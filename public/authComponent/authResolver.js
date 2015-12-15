/*********************************************************************
 * Created by Anton Baksheiev on 15.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .factory('authResolver', function ($q, $rootScope, $state) {
            return {
                resolve: function () {
                    var deferred = $q.defer();
                    var unwatch = $rootScope.$watch('currentUser', function (currentUser) {
                        if (angular.isDefined(currentUser)) {
                            if (currentUser) {
                                deferred.resolve(currentUser);
                            } else {
                                deferred.reject();
                                $state.go('user-login');
                            }
                            unwatch();
                        }
                    });
                    return deferred.promise;
                }
            };
        })
})()