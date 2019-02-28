const express = require('express');
const app = express();
const queryString = require('querystring');
const url = require('url');

var http = require('http');
const hostname = '127.0.0.1';
const port = 3059;

require('./routes')(app);

app.listen(port, hostname, () => {
    console.log('Server has been started at '+hostname+':'+port);
});