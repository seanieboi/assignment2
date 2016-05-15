'use strict';

describe('Controller: GameDetailControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('funTimesApp'));

  var GameDetailControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameDetailControllerCtrl = $controller('GameDetailControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
