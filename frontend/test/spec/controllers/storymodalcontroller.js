'use strict';

describe('Controller: StorymodalcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('cvcApp'));

  var StorymodalcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StorymodalcontrollerCtrl = $controller('StorymodalcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StorymodalcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
