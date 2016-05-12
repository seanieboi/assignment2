'use strict';

import mongoose from 'mongoose';

var GameReviewsSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('GameReviews', GameReviewsSchema);