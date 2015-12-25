/*********************************************************************
 * Created by Anton Baksheiev on 15.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .controller('applicationController', applicationController);
    applicationController.$inject = ['$scope', 'USER_ROLES', 'session', 'authService'];
    function applicationController($scope,
                                   USER_ROLES,
                                   session,
                                   authService) {
        var vm = this;
        angular.extend(vm, {
            currentUser: null,
            userRoles: USER_ROLES,
            isAuthorized: authService.isAuthorized,
            setCurrentUser: setCurrentUser
        });


        function setCurrentUser(user) {
            vm.currentUser = user;
        };

        if (session.isAuthorized) {
            vm.setCurrentUser({
                id: session.userId,
                role: session.userRole,
                displayName: session.displayName
            })
        }
    };
})()