/**
 * GameReviews model events
 */

'use strict';

import {EventEmitter} from 'events';
import GameReviews from './gameReviews.model';
var GameReviewsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GameReviewsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  GameReviews.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    GameReviewsEvents.emit(event + ':' + doc._id, doc);
    GameReviewsEvents.emit(event, doc);
  }
}

export default GameReviewsEvents;
