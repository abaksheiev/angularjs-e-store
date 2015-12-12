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
        });

        it('should have defined function "getById"', function() {
            expect(factoryInstance.getById).toBeDefined();
        });


        it('should have defined function "deleteById"', function() {
            expect(factoryInstance.deleteById).toBeDefined();
        });

        it('should have defined function "save"', function() {
            expect(factoryInstance.save).toBeDefined();
        });
    })
});