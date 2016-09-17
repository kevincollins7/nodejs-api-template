'use strict';
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const express = require('express');

var config;
var debugModeOn;

var env = process.env.NODE_ENV || 'development';
switch (env) {
  case 'development':
    config = require('./config/config').development;
    debugModeOn = true;
    break;
  case 'production':
    config = require('./config/config').production;
    debugModeOn = false;
    break;
}

module.exports.config = config;
module.exports.env = env;

// Globals
const publicdir = path.join(__dirname, 'public');

// Setup express/app
const app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/v1', require('./routes/v1'));

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Default error handler
app.use(function(err, req, res, next) {
  //console.log('err.status: %s', err.status);
  console.log('err.name: %s', err.name);

  //filter/replace certain error messages
  if (err.name === 'UnauthorizedError') err.message = 'Invalid token';

res.status(err.status || 500).json({error: err.message});
});

// Get port from environment and store in express
const port = (process.env.PORT || '3000');
app.set('port', port);

// Create HTTP Server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Event Listener for HTTP server 'error event'
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires eleveated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event Listener for HTTP server 'Listening' event
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  //debug('Listening on ' + bind);
  console.log('Listening on ' + bind);
}
