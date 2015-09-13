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
            var data = {};
            if(storyId) {
                data.storyId = storyId;
            }
            // $http.get('https://fast-dawn-1609.herokuapp.com/stories', data).then(function(response) {
            //     console.log(response);
            // });
            console.log(storyId);

            return {
                story_id: 10,
                title: 'STORY TITLE',
                photo: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg',
                section_1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                section_2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                section_3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            };
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
