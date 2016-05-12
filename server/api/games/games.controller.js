/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/games              ->  index
 * POST    /api/games              ->  create
 * GET     /api/games/:id          ->  show
 * PUT     /api/games/:id          ->  update
 * DELETE  /api/games/:id          ->  destroy
 */

 var _ = require('lodash')
    var Games = require('./games.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Gamess
export function index(req, res) {
  return Games.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Games from the DB
export function show(req, res) {
  return Games.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Games in the DB
export function create(req, res) {
  return Games.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Games in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Games.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Games from the DB
export function destroy(req, res) {
  return Games.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Add a comment to a game
  exports.add_comment = function(req, res) {
     Games.findById(req.params.id, function (err, games) {
            var comment = {
                body: req.body.body,
                author: req.body.author ,
                upvotes: 0
             }
            games.comments.push(comment)
            games.save(function (err) {
              if(err) { return handleError(res, err); }
              var last = _.last(games.comments)
              if (last != undefined) {
                 return res.json(200, last);
              } else {
                return res.send(500,"Database error")
                 }
            });
      });
  };
  exports.update_comment_upvotes = function(req, res) {
      Games.findById(req.params.game_id, function (err, games) {
          var comment = games.comments.id(req.params.comment_id)
          if (comment) {
            comment.upvotes = req.body.upvotes
            games.save(function (err) {
                if (err) { return handleError(res, err); }
                return res.json(200,comment)
              });
          } else {
            return res.send(401,"Bad comment id")
          }

       })
    };
