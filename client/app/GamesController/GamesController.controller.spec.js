'use strict';

describe('Controller: GamesControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment2App'));

  var GamesControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamesControllerCtrl = $controller('GamesControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
