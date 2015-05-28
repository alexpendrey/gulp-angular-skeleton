'use strict';

var angular = require('angular');

module.exports = angular
    .module('WHO.WF.Promotions',[

        require('angular-ui-router')

    ])
    .run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .config(require('./states'));