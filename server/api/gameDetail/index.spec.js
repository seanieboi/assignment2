'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var gameDetailCtrlStub = {
  index: 'gameDetailCtrl.index',
  show: 'gameDetailCtrl.show',
  create: 'gameDetailCtrl.create',
  update: 'gameDetailCtrl.update',
  destroy: 'gameDetailCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var gameDetailIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './gameDetail.controller': gameDetailCtrlStub
});

describe('GameDetail API Router:', function() {

  it('should return an express router instance', function() {
    gameDetailIndex.should.equal(routerStub);
  });

  describe('GET /api/gameDetails', function() {

    it('should route to gameDetail.controller.index', function() {
      routerStub.get
        .withArgs('/', 'gameDetailCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/gameDetails/:id', function() {

    it('should route to gameDetail.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'gameDetailCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/gameDetails', function() {

    it('should route to gameDetail.controller.create', function() {
      routerStub.post
        .withArgs('/', 'gameDetailCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/gameDetails/:id', function() {

    it('should route to gameDetail.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'gameDetailCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/gameDetails/:id', function() {

    it('should route to gameDetail.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'gameDetailCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/gameDetails/:id', function() {

    it('should route to gameDetail.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'gameDetailCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
