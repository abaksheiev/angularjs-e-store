/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function(){
    angular
        .module('eStoreApp')
        .controller('categoryController', categoryController);

   // categoryController.$inject=['categoryService']

    function categoryController(){
        var vm = this;
        vm.name = 'categoryController'
        /*
        categoryService
            .getAll()
            .then(function(data){
                vm.categoryList = data;

            })
*/
        vm.category =['The first', 'the second']
    }
})()
