'use strict';

describe('PhoneListCtrl function', function() {

  describe('PhoneListCtrl', function() {
    var $scope;

    beforeEach(angular.mock.module('eStoreApp'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('PhoneListCtrl', {$scope: $scope});
    }));

    it('should have name is PhoneListCtrl', function() {
      expect($scope.name).toBe('PhoneListCtrl');
    });

    it('should create "phones" model with 3 spices', function() {
      expect($scope.phones.length).toBe(3);
    });

     
  });
});