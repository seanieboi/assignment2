'use strict';

var app = require('../..');
import request from 'supertest';

var newGameReviews;

describe('GameReviews API:', function() {

  describe('GET /api/gameReviews', function() {
    var gameReviewss;

    beforeEach(function(done) {
      request(app)
        .get('/api/gameReviews')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          gameReviewss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      gameReviewss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/gameReviews', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/gameReviews')
        .send({
          name: 'New GameReviews',
          info: 'This is the brand new gameReviews!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newGameReviews = res.body;
          done();
        });
    });

    it('should respond with the newly created gameReviews', function() {
      newGameReviews.name.should.equal('New GameReviews');
      newGameReviews.info.should.equal('This is the brand new gameReviews!!!');
    });

  });

  describe('GET /api/gameReviews/:id', function() {
    var gameReviews;

    beforeEach(function(done) {
      request(app)
        .get('/api/gameReviews/' + newGameReviews._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          gameReviews = res.body;
          done();
        });
    });

    afterEach(function() {
      gameReviews = {};
    });

    it('should respond with the requested gameReviews', function() {
      gameReviews.name.should.equal('New GameReviews');
      gameReviews.info.should.equal('This is the brand new gameReviews!!!');
    });

  });

  describe('PUT /api/gameReviews/:id', function() {
    var updatedGameReviews;

    beforeEach(function(done) {
      request(app)
        .put('/api/gameReviews/' + newGameReviews._id)
        .send({
          name: 'Updated GameReviews',
          info: 'This is the updated gameReviews!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedGameReviews = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedGameReviews = {};
    });

    it('should respond with the updated gameReviews', function() {
      updatedGameReviews.name.should.equal('Updated GameReviews');
      updatedGameReviews.info.should.equal('This is the updated gameReviews!!!');
    });

  });

  describe('DELETE /api/gameReviews/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/gameReviews/' + newGameReviews._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when gameReviews does not exist', function(done) {
      request(app)
        .delete('/api/gameReviews/' + newGameReviews._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
