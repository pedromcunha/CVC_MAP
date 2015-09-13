'use strict';

/**
 * @ngdoc function
 * @name cvcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvcApp
 */
angular.module('cvcApp')
    .controller('MainCtrl', function ($stateParams, story) {
        //pop open the modal
        story.dialog($stateParams.storyId);

    });
