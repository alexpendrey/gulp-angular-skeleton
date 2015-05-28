'use strict';

module.exports = /* @ngInject */ function ( $stateProvider ) {
    $stateProvider
        .state( 'WHO.WF.Promotions', {
            url: '/promotions',
            template: require('./views/Promotions.html')
        } );
};
