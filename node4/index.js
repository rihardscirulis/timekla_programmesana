var express = require('express');
var app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const hostname = '127.0.0.1',
  port = 8080;
  var mongoose = require('mongoose');
  var mongoUrl = 'mongodb://localhost/test';
  mongoose.connect(mongoUrl);
  require('./Painter');
  var db = mongoose.connection;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./routes')(app);

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/addForm.htm");
});

var server = app.listen(port, hostname, function() {
  console.log(' Example server started: ' + hostname + ' : ' + port);
});
