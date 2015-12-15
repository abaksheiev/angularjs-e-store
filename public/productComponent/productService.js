/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .factory('productService', productService);

    productService.$inject = ['$http']

    function productService($http) {
        return {
            getAll: getAll,
            getById: getById,
            getAuctionProduct: getAuctionProduct,
            deleteById: deleteById,
            save: function () {
            }
        }

        function getAll() {
            return $http.get('../mockData/products.json')
        }

        function getById() {
            return $http.get('/api/products/1')
        }

        function getAuctionProduct() {
            return $http.get('/api/products/1').then(handleSuccess, handleError('Auction product is not available'))
        }

        function deleteById() {

        }

        function save() {

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