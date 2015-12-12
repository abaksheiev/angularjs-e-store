/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
'use strict';

describe('>>>CATEGORY COMPONENT: CATALOG CONTROLLER<<<', function() {

    var categoryControllerInstance,
        controllerName = 'categoryController';

    beforeEach(module('eStoreApp'));

    beforeEach(inject(function ($controller) {
       categoryControllerInstance = $controller(controllerName, {});
    }));

    it('should have been defined', function () {
        expect(categoryControllerInstance).toBeDefined();
    });

    it('should have a property called name equal "'+ controllerName +'"', function () {
        expect(categoryControllerInstance.name).toEqual(controllerName);
    });

});