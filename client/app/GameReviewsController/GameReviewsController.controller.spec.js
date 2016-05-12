'use strict';

describe('Controller: GameReviewsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('assignment2App'));

  var GameReviewsControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameReviewsControllerCtrl = $controller('GameReviewsControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
