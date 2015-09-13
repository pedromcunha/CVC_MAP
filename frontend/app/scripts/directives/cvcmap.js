'use strict';

/**
 * @ngdoc directive
 * @name cvcApp.directive:cvcMap
 * @description
 * # cvcMap
 */
angular.module('cvcApp')
  .directive('cvcMap', function ($timeout, utils, story, mapViz) {
    return {
        template: '<div id="map" layout-fill><button ng-click="openLeftMenu()" class="filter-button"><md-tooltip md-direction="top"> Filters </md-tooltip><i class="fa fa-filter"></i></button></div>',
        restrict: 'E',
        replace: true,
        link: function () {
            $timeout(function() {
              window.cartodb.createVis('map', 'https://pedrocunha.cartodb.com/api/v2/viz/22495492-59bd-11e5-8d60-0e73ffd62169/viz.json')
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
                mapViz.setMap(vis, layers);

                // now, perform any operations you need, e.g. assuming map is a L.Map object:
                if(story.userLocation.loc) {
                    map.setView(story.userLocation.loc.split(','));
                }
            }
        }
    };
});
