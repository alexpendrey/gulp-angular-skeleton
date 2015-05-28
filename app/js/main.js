'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('angular-bootstrap');
var siteFrame   = require('./controllers/SiteFrame');

// create and bootstrap application
angular.element(document).ready(function() {

    var requires = [
        'ui.router',
        'ui.bootstrap',
        siteFrame.name
    ];

    // mount on window for testing
    window.app = angular.module('app', requires);

    angular.bootstrap(document, ['app']);

});