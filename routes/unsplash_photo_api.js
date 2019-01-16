const axios = require('axios');
const keys = require('../config/keys');
const requireAuth = require('../middlewares/requireAuth')

module.exports = app => {
  app.get('/api/getPhoto', requireAuth, async (req, res) => {
    try {
      const request = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${keys.unsplashAccessKey}`);
      const { data } = request;
      res.send(data);
    } catch (e) {
      res.send(e)
    }
  });
};
