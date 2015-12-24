/*********************************************************************
 * Created by Anton Baksheiev on 22.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp.admin')
        .controller('eStoreApp.admin.userController', userController);

    userController.$inject = ['$routeParams', '$location', 'eStoreApp.data.userService']

    function userController($routeParams, $location, userService) {
        var vm = this;
        vm.user = {
            _id: undefined,
            firstName: undefined,
            lastName: undefined
        };
        vm.userList = [];
        angular.extend(vm, {
            name: 'eStoreApp.admin.userController',
            templateUrl: 'public/userComponent/views/userList.html',
            loadUsers: loadUserList,
            loadDetails: loadUserDetails,

            goToUserGrid: goToUserGrid,
            saveUser: saveUser,
            createNewUser: createNewUser,
            deleteUser: deleteUser,

            goToUserDetails: goToUserDetails
        });

        function loadUserList() {
            var src = vm;
            userService
                .getAll()
                .then(function (data) {
                    src.userList = data;
                })
        }

        function loadUserDetails() {
            var src = vm;
            userService
                .getById($routeParams.userId)
                .then(function (data) {
                    src.user = data[0];
                })
        }

        function goToUserGrid() {
            $location.path('/users');
        }

        function goToUserDetails(userId) {
            $location.path('/users/' + userId);
        }

        function saveUser() {
            var src = vm;

            userService
                .save(src.user)
                .then(function () {
                    $location.path('/users');
                });
        }

        function createNewUser() {
            vm.user._id = undefined;
            saveUser();
        }

        function deleteUser(userId) {
            userService
                .delete(userId)
                .then(function () {
                    $location.path('/users');
                });
        }
    }
})()
