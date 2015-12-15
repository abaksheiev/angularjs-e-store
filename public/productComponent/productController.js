/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .controller('productController', productController);

    productController.$inject = ['productService']

    function productController(productService) {
        var vm = this;
        angular.extend(this, {
            name: 'productController',
            tmpls: {
                productDetails: 'public/productComponent/views/productDetails.html',
                productRating: 'public/productComponent/views/productRating.html'
            },
            loadAuctionProduct: loadAuctionProduct
        });

        function loadAuctionProduct() {
            productService.getAuctionProduct().then(function (data) {
                vm.auctionProduct = data
            });
        }
    }
})()