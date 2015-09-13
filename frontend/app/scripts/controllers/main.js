'use strict';

/**
 * @ngdoc function
 * @name cvcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvcApp
 */
angular.module('cvcApp')
    .controller('MainCtrl', function ($stateParams, $scope, $mdSidenav, story, mapViz) {
        //pop open the modal
        story.dialog($stateParams.storyId);

        $scope.filter = {};

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
            var map = mapViz.getMap();
            var layers;

            if(map && map.getLayers) {
                layers = map.getLayers();
            }
            console.log(layers, map.getLayer);
        };

    });
