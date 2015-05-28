'use strict';

module.exports = /* @ngInject */ function States( $stateProvider, $urlRouterProvider, $locationProvider ) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise( '/' );

    $stateProvider
        .state( 'WHO', {
           template: require('./views/SiteFrame.html'),
            controller: require( './SiteFrameController' ),
            controllerAs: 'siteframe'
        } )
        .state( 'WHO.WF', {
            views: {
                'app': {
                    template: '<div id="content-container"><div class="view-section" ui-view=""></div></div>'
                },
                'footer': {
                    template: require('../Footer/views/Footer.html'),
                    controller: require( '../Footer/FooterController')
                },
                'header': {
                    template: require('../Header/views/Header.html'),
                    controller: require('../Header/HeaderController')
                }
            }

        } );

};
