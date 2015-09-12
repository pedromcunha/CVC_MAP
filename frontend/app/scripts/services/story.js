'use strict';

/**
 * @ngdoc service
 * @name cvcApp.story
 * @description
 * # story
 * Service in the cvcApp.
 */
angular.module('cvcApp')
    .factory('story', function () {
        var story = {};

        story.get = function(storyId) {
            console.log(storyId);
        };

        story.create = function() {

        };

        return story;
    });
