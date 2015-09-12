'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
    angular
    .module('frontendApp', [
        'ngTouch',
        'ngMaterial'
    ])

    //Theme Configuration
    .config(function ($mdThemingProvider) {
        //create color palletes
        // var okraGreen = $mdThemingProvider.extendPalette('green', {
        //     '500': '#99b742',
        // });
        // var okraGreenAccent = $mdThemingProvider.extendPalette('green', {
        //     'A200': '#99b742'
        // });

        //define color extensions
        // $mdThemingProvider.definePalette('okraGreen', okraGreen);
        // $mdThemingProvider.definePalette('okraGreenAccent', okraGreenAccent);

        //register extensions to the theme
        $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('purple');
    });
