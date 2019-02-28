const fs = require('fs');
var mongoose = require('mongoose');
Painter = mongoose.model('Painter');
//var painters = [];

//painters = JSON.parse(fs.readFileSync('./painters.json', 'utf8'));

exports.getAll = function(req, res) {
  Painter.find({}, function(err, result) {
    return res.send(result);
  });
  //res.end(JSON.stringify(painters));
};

exports.getName = function(req, res) {
  let name = req.params.name; // 'Henri Matisse';
  //let response = [];
  //painters.forEach(painter => {
  //  if (painter.name.includes(name)) {
  //    response.push(painter);
  //  }
  //});
  //res.end(JSON.stringify(response));
  Painter.find({'name': {$regex: '.*'+name+'.*'}}, function(err, result) {
    return res.send(result);
  });
};

exports.getPainterAlive = function(req, res) {
  let year = req.params.year;
  Painter.find({'birthy': {$lte: year}, 'deathy':{$gte: year}}, function(err, result) {
    return res.send(result);
  });
};

//exports.addPainter = function(req, res) {
/*  let painter = {
    name: req.body.name,
    birthy : req.body. birthy,
    deathy: req.body.deathy,
    notes: req.body.notes ,
    ledit:1516720109
  };*/
  /*Painter.create(req.body.painter, function(req, result){
    return res.send(result);
  });*/
  /*let painter = req.body.painter;
  painter['ledit'] = 1516720109;
  painters.push(painter);
  res.end(JSON.stringify(painters));*/
//};

exports.deleteMultiplePainters = function(req, res) {
  let name = req.params.name;
  Painter.deleteMany({'name': {$regex: '.*'+name+'.*'}}, function(err, result) {
    return res.send(result);
  });
};

exports.deletePainter = function(req, res) {
  let id = req.params.name;
  Painter.deleteOne({'id': id}, function(err, result) {
    return res.send(result);
  });
}

exports.updatePainter = function(req, res) {
  let name = req.params.name;
  Painter.deleteMany({'name': {$regex: '.*'+name+'.*'}}, function(err, result) {
    return res.send(result);
  });
}
