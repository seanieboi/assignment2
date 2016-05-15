'use strict';

var express = require('express');
var controller = require('./games.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
//router.get('/:id/gameReviews', controller.show_reviews);
router.post('/:id/comments', controller.add_comment);
router.post('/:game_id/comments/:comment_id/upvotes', controller.update_comment_upvotes);

module.exports = router;
