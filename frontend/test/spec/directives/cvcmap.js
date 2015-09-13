'use strict';

describe('Directive: cvcMap', function () {

  // load the directive's module
  beforeEach(module('cvcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cvc-map></cvc-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cvcMap directive');
  }));
});
