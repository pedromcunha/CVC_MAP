'use strict';

/**
 * @ngdoc function
 * @name cvcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvcApp
 */
angular.module('cvcApp')
    .controller('MainCtrl', function ($stateParams, $scope, $mdSidenav, story) {
        //pop open the modal
        story.dialog($stateParams.storyId);

        $scope.filter = {
            race: '',
            age: '',
            children: ''
        };
        $scope.ages = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

        $scope.addFilters = function() {
            var query = 'SELECT * FROM source_table';
            var filter = $scope.filter;
            if(filter.age) {
                query += ' WHERE age = ' + filter.age;
            }
            if(filter.race) {
                query += ' WHERE race = ' + filter.race;
            }
            if(filter.children) {
                query += ' WHERE children = ' + filter.children;
            }
            console.log(query);
            $mdSidenav('left').toggle();
        };

        $scope.showStory = function(id) {
            story.dialog(id);
        };

    });
