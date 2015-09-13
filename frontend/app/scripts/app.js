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
            .primaryPalette('deep-purple')
            .accentPalette('purple');


        //ui router config
        $urlRouterProvider.otherwise("/");

        //states
        $stateProvider
            .state('main', {
                url: "/:storyId",
                templateUrl: "views/map_landing.html",
                controller: 'MainCtrl'
            });
    })

;
