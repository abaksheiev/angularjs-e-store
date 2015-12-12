/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function(){
    angular
        .module('eStoreApp')
        .controller('categoryController', categoryController);

    categoryController.$inject=['$log', 'categoryService']

    function categoryController($log, categoryService){
        var vm = this;
        angular.extend(this, {
            name : 'categoryController',
            templateUrl: 'public/categoryComponent/views/categoryList.html'
        });

        categoryService
            .getAll()
            .then(function(request){
                $log.log(request.data);
                vm.categoryList = request.data;
                vm.categoryList[0].active = true;
            })
    }
})()
