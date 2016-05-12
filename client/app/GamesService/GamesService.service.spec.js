'use strict';

describe('Service: GamesService', function () {

  // load the service's module
  beforeEach(module('assignment2App'));

  // instantiate service
  var GamesService;
  beforeEach(inject(function (_GamesService_) {
    GamesService = _GamesService_;
  }));

  it('should do something', function () {
    expect(!!GamesService).toBe(true);
  });

});
