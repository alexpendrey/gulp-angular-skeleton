'use strict';

module.exports = /* @ngInject */ function ( $stateProvider ) {
    $stateProvider
        .state( 'WHO.WF.HomePage', {
            url: '/',
            template: require('./views/HomePage.html')
        } );
};
