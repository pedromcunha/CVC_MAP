'use strict';

/**
 * @ngdoc service
 * @name cvcApp.story
 * @description
 * # story
 * Service in the cvcApp.
 */
angular.module('cvcApp')
    .factory('story', function ($mdDialog) {
        var story = {};

        story.get = function(storyId) {
            console.log(storyId);

            return {};
        };

        story.create = function() {

        };

        story.dialog = function(storyId) {
            if(storyId) {
                story.currentStory = story.get(storyId);
            } else {
                story.currentStory = story.get();
            }

            $mdDialog.show({
                controller: 'storyModalCtrl',
                templateUrl: 'views/story_modal_dialog.html',
                parent: angular.element(document.body),
                // targetEvent: $event,
                clickOutsideToClose:true
            })
            .then(function(response) {
                console.log(response);
            }, function() {
                console.log('closed by backdrop!');
            });
        };

        return story;
    });
