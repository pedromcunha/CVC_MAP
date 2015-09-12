'use strict';

/**
 * @ngdoc service
 * @name cvcApp.utils
 * @description
 * # utils
 * Service in the cvcApp.
 */
angular.module('cvcApp')
    .service('utils', function ($http, user) {
        var utils = {};

        utils.getZipCode = function() {
            return $http.get("http://ipinfo.io")
                .then(function(response) {
                    if(response && response.data) {
                        user.location = response.data;
                    }
                });
        };

        return utils;
    });
