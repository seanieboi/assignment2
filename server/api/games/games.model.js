// server/api/comment/post.model.js
'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CommentSchema = new Schema({
        body: { type: String, required: true },
        author: { type: String, required: true },
        upvotes: Number
  });

var GameSchema = new Schema({
    name: { type: String, required: true },
    releaseDate: { type: String, required: true },
    imageUrl: { type: String, required: true },
    images: { type:String, required: false },
    snippet: { type:String, required: true },
    description: { type: String, required: true },
    certified: { type: String, required: true },
    platform: { type: String, required: true },
    price: Number,
    brand: { type: String, required: true },
    ratings: Number, 
    series: { type: String, required: true },
    trailer: { type: String, required: false },
    players: Number,
    comments: [CommentSchema]   
 });


module.exports = mongoose.model('games', GameSchema);
