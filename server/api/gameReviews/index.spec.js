'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var gameReviewsCtrlStub = {
  index: 'gameReviewsCtrl.index',
  show: 'gameReviewsCtrl.show',
  create: 'gameReviewsCtrl.create',
  update: 'gameReviewsCtrl.update',
  destroy: 'gameReviewsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var gameReviewsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './gameReviews.controller': gameReviewsCtrlStub
});

describe('GameReviews API Router:', function() {

  it('should return an express router instance', function() {
    gameReviewsIndex.should.equal(routerStub);
  });

  describe('GET /api/gameReviews', function() {

    it('should route to gameReviews.controller.index', function() {
      routerStub.get
        .withArgs('/', 'gameReviewsCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/gameReviews/:id', function() {

    it('should route to gameReviews.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'gameReviewsCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/gameReviews', function() {

    it('should route to gameReviews.controller.create', function() {
      routerStub.post
        .withArgs('/', 'gameReviewsCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/gameReviews/:id', function() {

    it('should route to gameReviews.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'gameReviewsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/gameReviews/:id', function() {

    it('should route to gameReviews.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'gameReviewsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/gameReviews/:id', function() {

    it('should route to gameReviews.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'gameReviewsCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
