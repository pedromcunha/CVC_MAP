'use strict';

describe('Service: mapViz', function () {

  // load the service's module
  beforeEach(module('cvcApp'));

  // instantiate service
  var mapViz;
  beforeEach(inject(function (_mapViz_) {
    mapViz = _mapViz_;
  }));

  it('should do something', function () {
    expect(!!mapViz).toBe(true);
  });

});
