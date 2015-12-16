/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .controller('categoryController', categoryController);

    categoryController.$inject = [ 'categoryService']

    function categoryController( categoryService) {
        var vm = this;
        angular.extend(this, {
            name: 'categoryController',
            templateUrl: 'public/categoryComponent/views/categoryList.html',
            loadCategories:function(){loadCategories(vm)}
        });

        function loadCategories(vm){
            categoryService
                .getAll()
                .then(function (data) {
                    vm.categoryList = data;
                    vm.categoryList[0].active = true;
                })
        }
    }


})()
