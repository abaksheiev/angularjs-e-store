/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function(){
    angular
        .module('eStoreApp')
        .controller('productController', productController);

    // categoryController.$inject=['categoryService']

    function productController() {
        var vm = this;
        angular.extend(this, {
            name : 'categoryController',
            tmpls:{
                productDetails:'public/productComponent/views/productDetails.html',
                productRating:'public/productComponent/views/productRating.html'
            }
        });


        var vm = this;
        vm.name = 'productController'
        /*
         categoryService
         .getAll()
         .then(function(data){
         vm.categoryList = data;

         })
         */
        vm.product = ['The first', 'the second']
    }
})()