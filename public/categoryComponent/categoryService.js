/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function(){
    angular
        .module('eStoreApp')
        .factory('categoryService', categoryService);

    categoryService.$inject=['$http']
    function categoryService($http){
        return{
            getAll: getAll,
            getById:function(){},
            deleteById:function(){},
            save:function(){}
        }

        function getAll(){
            return $http.get('/api/categories/getAll')
        }
    }
})()