'use strict';

/**
 * @ngdoc function
 * @name cvcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvcApp
 */
angular.module('cvcApp')
    .controller('MainCtrl', function ($stateParams, $scope, $mdSidenav, story) {
        //pop open the modal
        story.dialog($stateParams.storyId);

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

    });
