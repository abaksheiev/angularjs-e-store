/*********************************************************************
 * Created by Anton Baksheiev on 12.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
describe('>>>PRODUCT COMPONENT: PRODUCT SERVICE<<<', function (){
    var factoryInstance,
        factoryName = 'productService';

    beforeEach(module('eStoreApp'));

    beforeEach(function() {

        inject(function($injector) {
            factoryInstance = $injector.get(factoryName);
        });
    });

    it('should have been defined', function() {
        expect(factoryInstance).toBeDefined();
    });

    describe('should have defined CRUD operation', function () {
        it('should have defined function "getAll"', function() {
            expect(factoryInstance.getAll).toBeDefined();
            expect(factoryInstance.getAll).toEqual(jasmine.any(Function));
        });

        it('should have defined function "getById"', function() {
            expect(factoryInstance.getById).toBeDefined();
            expect(factoryInstance.getById).toEqual(jasmine.any(Function));
        });


        it('should have defined function "deleteById"', function() {
            expect(factoryInstance.deleteById).toBeDefined();
            expect(factoryInstance.deleteById).toEqual(jasmine.any(Function));
        });

        it('should have defined function "save"', function() {
            expect(factoryInstance.save).toBeDefined();
            expect(factoryInstance.save).toEqual(jasmine.any(Function));
        });
    })
});