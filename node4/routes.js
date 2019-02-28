module.exports = function(app) {
  var incoming = require('./painters');

  app.get('/get/:name', incoming.getName);
  app.get('/alive/:year', incoming.getPainterAlive);
  app.get('/get', incoming.getAll);
  //app.post('/add', incoming.addPainter);
  app.delete('/delete/:id', incoming.deletePainter);
  app.delete('/deleteFound/:name', incoming.deleteMultiplePainters);
  //app.patch('/update', incoming.updatePainter);
}
