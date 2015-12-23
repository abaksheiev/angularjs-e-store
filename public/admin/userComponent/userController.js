/*********************************************************************
 * Created by Anton Baksheiev on 22.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp.admin')
        .controller('eStoreApp.admin.userController', userController);

    userController.$inject = ['$routeParams','eStoreApp.data.userService']

    function userController($routeParams, userService) {
        var vm = this;

        angular.extend(this, {
            name: 'eStoreApp.admin.userController',
            templateUrl: 'public/userComponent/views/userList.html',
            loadUsers: function () {
                loadUserList(vm)
            },
            loadDetails:function(){
                loadUserDetails(vm)
            }
        });

        function loadUserList(vm) {
            userService
                .getAll()
                .then(function (data) {
                    vm.userList = data;
                })
        }

        function loadUserDetails(vm){
            userService
                .getById($routeParams.userId)
                .then(function (data) {
                    vm.user = data[0];
                })
        }
    }
})()
