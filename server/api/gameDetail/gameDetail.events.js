/**
 * GameDetail model events
 */

'use strict';

import {EventEmitter} from 'events';
import GameDetail from './gameDetail.model';
var GameDetailEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
GameDetailEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  GameDetail.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    GameDetailEvents.emit(event + ':' + doc._id, doc);
    GameDetailEvents.emit(event, doc);
  }
}

export default GameDetailEvents;
