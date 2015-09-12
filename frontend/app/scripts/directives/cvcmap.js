'use strict';

/**
 * @ngdoc directive
 * @name cvcApp.directive:cvcMap
 * @description
 * # cvcMap
 */
angular.module('cvcApp')
  .directive('cvcMap', function () {
    return {
      template: '<div class="cvc-map">MAP</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
