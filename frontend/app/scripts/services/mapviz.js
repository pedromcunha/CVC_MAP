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
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
