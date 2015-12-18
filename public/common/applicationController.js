/*********************************************************************
 * Created by Anton Baksheiev on 15.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .controller('applicationController', applicationController);
    applicationController.$inject = ['$scope', 'USER_ROLES','session', 'authService'];
    function applicationController($scope,
                                   USER_ROLES,
                                   session,
                                   authService) {
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = authService.isAuthorized;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };

        if(session.isAuthorized){
            $scope.setCurrentUser({
                id:session.userId,
                role:session.userRole,
                displayName:session.displayName
            })
        }
    };
})()