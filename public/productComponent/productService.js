/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function(){
    angular
        .module('eStoreApp')
        .factory('productService', productService);

    productService.$inject=['$http']

    function productService($http){
        return{
            getAll: getAll,
            getById:function(){
                return $http.get('/api/products/1')
            },
            getAuctionProduct :function(){
                return $http.get('/api/products/1').then(handleSuccess,handleError('Auction product is not available'))
            },
            deleteById:function(){},
            save:function(){}
        }

        function getAll(){
            return $http.get('../mockData/products.json')
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return {success: false, message: error};
            };
        }

    }
})()