'use strict';

var angular = require('angular');
console.log('in homepage index');
module.exports = angular
    .module('WHO.WF.HomePage',[

        require('angular-ui-router')

    ])
    .run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }])
    .config(require('./states'));