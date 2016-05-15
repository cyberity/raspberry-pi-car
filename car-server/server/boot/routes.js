module.exports = function(app) {
  app.get('/forward', function(req, res) {
    res.send('forward');
  });
  app.get('/backward', function(req, res) {
    res.send('backward');
  });
}
