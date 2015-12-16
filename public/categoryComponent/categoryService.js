/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .factory('categoryService', categoryService);

    categoryService.$inject = ['$http']

    function categoryService($http) {
        return {
            getAll: GetAll,
            getById: GetById,
            create: Create,
            update: Update,
            deleteById: Delete
        };

        // private functions

        function GetAll() {
            return $http.get('api/categories/getAll').then(handleSuccess, handleError('Error getting all categories'));
        }

        function GetById(id) {
            return $http.get('/api/categories/' + id).then(handleSuccess, handleError('Error getting category by id'));
        }

        function Create(item) {
            return $http.post('/api/users', item).then(handleSuccess, handleError('Error creating category'));
        }

        function Update(item) {
            return $http.put('/api/categories/' + item.id, item).then(handleSuccess, handleError('Error updating category'));
        }

        function Delete(item) {
            return $http.delete('/api/categories/' + id).then(handleSuccess, handleError('Error deleting category'));
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