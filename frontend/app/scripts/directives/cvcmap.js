'use strict';

/**
 * @ngdoc directive
 * @name cvcApp.directive:cvcMap
 * @description
 * # cvcMap
 */
angular.module('cvcApp')
  .directive('cvcMap', function ($timeout, utils, story) {
    return {
        template: '<div id="map" layout-fill></div>',
        restrict: 'E',
        replace: true,
        link: function () {
            $timeout(function() {
              window.cartodb.createVis('map', 'https://pedrocunha.cartodb.com/api/v2/viz/0b6e4576-59a8-11e5-8218-0e6e1df11cbf/viz.json')
                .done(function(vis, layers) {
                    utils.getZipCode().then(function(response) {
                        story.userLocation = response;
                        visualizeMap(vis, layers);
                    });
                });
            });

            function visualizeMap(vis, layers) {
                // layer 0 is the base layer, layer 1 is cartodb layer
                // when setInteraction is disabled featureOver is triggered
                layers[1].setInteraction(true);
                layers[1].on('featureOver', function(e, latlng, pos, data, layerNumber) {
                    console.log(e, latlng, pos, data, layerNumber);
                });

                // you can get the native map to work with it
                var map = vis.getNativeMap();

                // now, perform any operations you need, e.g. assuming map is a L.Map object:
                if(story.userLocation.loc) {
                    map.setView(story.userLocation.loc.split(','));
                }
            }
        }
    };
  });
