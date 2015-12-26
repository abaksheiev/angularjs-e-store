/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
'use strict';

describe('>>>CATEGORY COMPONENT: CATALOG CONTROLLER<<<', function() {

    var scope,
        categoryControllerInstance,
        categoryServiceMock,
        controllerName = 'categoryController';

    beforeEach(function(){
         module('eStoreApp');
    });


    beforeEach(function(){
        categoryServiceMock={
            getAll:function(){}
        }
    });

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        categoryControllerInstance = $controller(controllerName, {
            categoryService:categoryServiceMock
        });
    }));

    it('should have been defined', function () {
        expect(categoryControllerInstance).toBeDefined();
    });

    it('should have a property called name equal "'+ controllerName +'"', function () {
        expect(categoryControllerInstance.name).toEqual(controllerName);
    });
/*
    it('should be call getAll from on loadCategories', function(){
        categoryControllerInstance.loadCategories();
            spyOn(categoryServiceMock, 'getAll').andCallThrough();

        });*/

});