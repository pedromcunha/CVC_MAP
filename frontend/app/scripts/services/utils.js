'use strict';

/**
 * @ngdoc service
 * @name cvcApp.utils
 * @description
 * # utils
 * Service in the cvcApp.
 */
angular.module('cvcApp')
    .service('utils', function ($http, $mdDialog) {
        var utils = {};

        utils.getZipCode = function() {
            return $http.get("http://ipinfo.io")
                .then(function(response) {
                    if(response && response.data) {
                        return response.data;
                    }
                });
        };

        //modals
        utils.modals = {};

        utils.modals.story =
            $mdDialog.show({
                controller: storyModalCtrl,
                templateUrl: 'story_modal_dialog.html',
                parent: angular.element(document.body),
                // targetEvent: $event,
                clickOutsideToClose:true
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });

        return utils;
    });
