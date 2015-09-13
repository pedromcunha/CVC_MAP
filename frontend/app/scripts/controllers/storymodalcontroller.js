'use strict';

/**
 * @ngdoc function
 * @name cvcApp.controller:storyModalCtrl
 * @description
 * # storyModalCtrl
 * Controller of the cvcApp
 */
angular.module('cvcApp')
    .controller('storyModalCtrl', function (story, $scope) {
        console.log(story.currentStory);
        $scope.modal = {};

        $scope.modal.story = story.currentStory;
        console.log($scope);
    });
