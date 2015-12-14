/*********************************************************************
 * Created by Anton Baksheiev on 14.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function(){
    angular
        .module('eStoreApp')
        .controller('homeController', homeController);

    homeController.$inject=['$log', '$scope']

    function homeController($log ,$scope){
        var vm = this;

        angular.extend(vm, {
            firstName : 'John',
            lastName: 'Brown'
        });
    }
})()