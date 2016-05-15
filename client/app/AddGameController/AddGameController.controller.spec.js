'use strict';

describe('Controller: AddGameControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('funTimesApp'));

  var AddGameControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddGameControllerCtrl = $controller('AddGameControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
