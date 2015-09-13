'use strict';

/**
 * @ngdoc service
 * @name cvcApp.mapViz
 * @description
 * # mapViz
 * Factory in the cvcApp.
 */
angular.module('cvcApp')
  .factory('mapViz', function () {
    //prive methods or variables
    var map, _layers;

    // Public API here
    return {
        setMap: function (viz, layers) {
            map = viz;
            _layers = layers;
        },
        getMap: function() {
            return map;
        },
        makeSqlQuey: function() {

        },
        toggleLayer: function() {

        }
    };
  });
