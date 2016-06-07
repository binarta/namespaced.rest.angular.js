describe('namespaced.rest', function () {
    beforeEach(module('namespaced.rest'));

    describe('on module load', function() {
        it('then a default header mapper should be installed', inject(function(installRestDefaultHeaderMapper) {
            expect(installRestDefaultHeaderMapper.calls.first().args[0]).toBeDefined();
        }));

        describe('given a configured namespace', function() {
            var headers, returnedHeaders;

            beforeEach(inject(function(installRestDefaultHeaderMapper, config) {
                headers = {};
                config.namespace = 'active-namespace';
                returnedHeaders = installRestDefaultHeaderMapper.calls.first().args[0](headers);
            }));

            it('then namespace header should be installed', inject(function(config) {
                expect(headers['x-namespace']).toEqual(config.namespace);
            }));

            it('then returned headers should match source headers', function() {
                expect(returnedHeaders).toEqual(headers);
            });
        });
    });
});