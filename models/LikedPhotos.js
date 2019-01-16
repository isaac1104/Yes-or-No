const mongoose = require('mongoose');
const { Schema } = mongoose;

const likedPhotosSchema = new Schema({
  url: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('LikedPhotos', likedPhotosSchema);
