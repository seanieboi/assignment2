'use strict';

var app = require('../..');
import request from 'supertest';

var newGameDetail;

describe('GameDetail API:', function() {

  describe('GET /api/gameDetails', function() {
    var gameDetails;

    beforeEach(function(done) {
      request(app)
        .get('/api/gameDetails')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          gameDetails = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      gameDetails.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/gameDetails', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/gameDetails')
        .send({
          name: 'New GameDetail',
          info: 'This is the brand new gameDetail!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newGameDetail = res.body;
          done();
        });
    });

    it('should respond with the newly created gameDetail', function() {
      newGameDetail.name.should.equal('New GameDetail');
      newGameDetail.info.should.equal('This is the brand new gameDetail!!!');
    });

  });

  describe('GET /api/gameDetails/:id', function() {
    var gameDetail;

    beforeEach(function(done) {
      request(app)
        .get('/api/gameDetails/' + newGameDetail._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          gameDetail = res.body;
          done();
        });
    });

    afterEach(function() {
      gameDetail = {};
    });

    it('should respond with the requested gameDetail', function() {
      gameDetail.name.should.equal('New GameDetail');
      gameDetail.info.should.equal('This is the brand new gameDetail!!!');
    });

  });

  describe('PUT /api/gameDetails/:id', function() {
    var updatedGameDetail;

    beforeEach(function(done) {
      request(app)
        .put('/api/gameDetails/' + newGameDetail._id)
        .send({
          name: 'Updated GameDetail',
          info: 'This is the updated gameDetail!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedGameDetail = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedGameDetail = {};
    });

    it('should respond with the updated gameDetail', function() {
      updatedGameDetail.name.should.equal('Updated GameDetail');
      updatedGameDetail.info.should.equal('This is the updated gameDetail!!!');
    });

  });

  describe('DELETE /api/gameDetails/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/gameDetails/' + newGameDetail._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when gameDetail does not exist', function(done) {
      request(app)
        .delete('/api/gameDetails/' + newGameDetail._id)
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
