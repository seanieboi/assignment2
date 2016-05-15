'use strict';

describe('Controller: ContactControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('funTimes.app'));

  var ContactControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactControllerCtrl = $controller('ContactControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
