'use strict';

/**
 * @ngdoc function
 * @name cvcApp.controller:storyModalCtrl
 * @description
 * # storyModalCtrl
 * Controller of the cvcApp
 */
angular.module('cvcApp')
    .controller('storyModalCtrl', function (story, $scope, $mdDialog) {
        $scope.modal = {};

        $scope.modal.story = story.currentStory;
        $scope.close = function () {
            $mdDialog.hide();
        };
    });
