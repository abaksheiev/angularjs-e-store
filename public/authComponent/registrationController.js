/*********************************************************************
 * Created by Anton Baksheiev on 16.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    'use strict';

    angular
        .module('eStoreApp')
        .controller('RegisterController', registerController);

    registerController.$inject = ['$location', '$rootScope'];
    function registerController($location, $rootScope) {
        var vm = this;

        vm.register = register;

        function register() {
            alert('registration...')
        }
    }

})();