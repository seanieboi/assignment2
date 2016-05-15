'use strict';

describe('Controller: MainControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('funTimesApp'));

  var MainControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainControllerCtrl = $controller('MainControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
