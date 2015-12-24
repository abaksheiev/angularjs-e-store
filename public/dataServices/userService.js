/*********************************************************************
 * Created by Anton Baksheiev on 22.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp.data')
        .factory('eStoreApp.data.userService', userService);

    userService.$inject = ['$http']

    function userService($http) {
        return {
            getAll: getAll,
            getById: getById,
            delete: deleteById,
            save: save
        }

        function getAll() {
            return $http
                .get('/api/v1/users/all')
                .then(handleSuccess, handleError('Please try letter'))
        }

        function getById(itemId) {
            return $http
                .get('/api/v1/users/' + itemId)
                .then(handleSuccess, handleError('Error User is available'))
        }


        function deleteById(itemId) {
            return $http
                .delete('/api/v1/users/' + itemId)
                .then(handleSuccess, handleError('Error: delete user'))
        }

        function save(user) {
            if (user._id) {
                return $http
                    .put('/api/v1/users/', user)
                    .then(handleSuccess, handleError('Error: Update user'))

            } else {
                return $http
                    .post('/api/v1/users/', user)
                    .then(handleSuccess, handleError('Error: create user'))
            }

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