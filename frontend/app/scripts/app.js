'use strict';

/**
 * @ngdoc overview
 * @name cvcApp
 * @description
 * # cvcApp
 *
 * Main module of the application.
 */
    angular
    .module('cvcApp', [
        'ngTouch',
        'ui.router',
        'ngMaterial'
    ])

    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        //Theme Configuration
        $mdThemingProvider.theme('default')
            .primaryPalette('purple')
            .accentPalette('pink');


        //ui router config
        $urlRouterProvider.otherwise("/");

        //states
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "views/map_landing.html",
                controller: 'MainCtrl'
            });
    })

;
