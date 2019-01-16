const mongoose = require('mongoose');
const LikedPhotos = mongoose.model('LikedPhotos');
const requireAuth = require('../middlewares/requireAuth');

module.exports = app => {
  app.get('/api/liked_photos', requireAuth, async (req, res) => {
    const likedPhotos = await LikedPhotos.find({ _user: req.user.id });
    res.send(likedPhotos);

    app.post('/api/liked_photos', requireAuth, async (req, res) => {
      const { url } = req.body;
      const currentPhoto = await LikedPhotos.findOne({ url });
      if (currentPhoto) {
        return;
      }
      const likedPhoto = new LikedPhotos({ url, _user: req.user.id });
      try {
        await likedPhoto.save();
        res.status(201);
        res.json();
      } catch (e) {
        res.status(400).send(e);
      }
    });
  });
};
