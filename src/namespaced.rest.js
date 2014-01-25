angular.module('namespaced.rest', ['rest.client', 'config'])
    .run(['installRestDefaultHeaderMapper', 'config', InstallNamespacedHeaderMapper]);

function InstallNamespacedHeaderMapper(installRestDefaultHeaderMapper, config) {
    installRestDefaultHeaderMapper(function(headers) {
        headers['x-namespace'] = config.namespace;
        return headers;
    });
}
