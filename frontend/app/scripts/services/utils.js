'use strict';

/**
 * @ngdoc service
 * @name cvcApp.utils
 * @description
 * # utils
 * Service in the cvcApp.
 */
angular.module('cvcApp')
    .service('utils', function ($http) {
        var utils = {};

        utils.getZipCode = function() {
            return $http.get("http://ipinfo.io")
                .then(function(response) {
                    if(response && response.data) {
                        return response.data;
                    }
                });
        };

        return utils;
    });
