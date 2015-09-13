'use strict';

/**
 * @ngdoc function
 * @name cvcApp.controller:storyModalCtrl
 * @description
 * # storyModalCtrl
 * Controller of the cvcApp
 */
angular.module('cvcApp')
    .controller('storyModalCtrl', function (story, $scope, $mdDialog, $mdSidenav) {
        $scope.modal = {};
        $scope.modal.story = story;
        $scope.close = function () {
            $mdDialog.hide();
        };

        $scope.modal.more = function() {
            $mdDialog.hide();
            $mdSidenav('left').toggle();
        };
    });
