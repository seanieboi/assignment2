// server/api/comment/post.model.js
'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CommentSchema = new Schema({
        body: { type: String, required: true },
        author: { type: String, required: true },
        upvotes: Number
  });

var GameDetailSchema = new Schema({
    name: { type: String, required: true },
    price: Number,
    releaseData: { type: String, required: true },
    ratings: Number, 
    certified: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    comments: [CommentSchema],
    series: { type: String, required: true },
    platform: { type: String, required: true },
    trailer: { type: String, required: true },
    players: Number

 });


module.exports = mongoose.model('GameDetail', GameDetailSchema);



