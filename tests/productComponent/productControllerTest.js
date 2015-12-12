/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
'use strict';

describe('>>>PRODUCT COMPONENT:  PRODUCT CONTROLLER<<<', function() {

    var controllerInstance,
        controllerName = 'productController';

    beforeEach(module('eStoreApp'));

    beforeEach(inject(function ($controller) {
        controllerInstance = $controller(controllerName, {});
    }));

    it('should have been defined', function () {
        expect(controllerInstance).toBeDefined();
    });

    it('should have a property called name equal "'+ controllerName +'"', function () {
        expect(controllerInstance.name).toEqual(controllerName);
    });
});