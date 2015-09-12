'use strict';

/**
 * @ngdoc directive
 * @name cvcApp.directive:cvcMap
 * @description
 * # cvcMap
 */
angular.module('cvcApp')
  .directive('cvcMap', function ($timeout) {
    return {
      template: '<div id="map" layout-fill></div>',
      restrict: 'E',
      replace: true,
      link: function () {
          $timeout(function() {
              window.cartodb.createVis('map', 'https://pedrocunha.cartodb.com/api/v2/viz/a4a0406e-5962-11e5-b251-0e49835281d6/viz.json')
              .done(function(vis, layers) {
                  console.log(vis, layers);
                  // layer 0 is the base layer, layer 1 is cartodb layer
                  // when setInteraction is disabled featureOver is triggered
                  layers[1].setInteraction(true);
                  layers[1].on('featureOver', function(e, latlng, pos, data, layerNumber) {
                    console.log(e, latlng, pos, data, layerNumber);
                  });

                  // you can get the native map to work with it
                  var map = vis.getNativeMap();

                  // now, perform any operations you need, e.g. assuming map is a L.Map object:
                  map.setZoom(3);
                  map.panTo([50.5, 30.5]);
                });
          });
      }
    };
  });
