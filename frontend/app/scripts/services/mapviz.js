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
    var map, _subLayers = [];

    // Public API here
    return {
        setMap: function (viz, layer) {
            map = viz;
            if(layer) {
                _subLayers.push(layer);
            }
        },
        getMap: function() {
            return map;
        },
        getLayers: function() {
            console.log(_subLayers);
            return _subLayers;
        },
        makeSqlQuey: function(query) {
            _subLayers[0].setSQL(query);
            return true;
        },
        toggleLayer: function() {

        }
    };
  });
