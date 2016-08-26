'use strict';
const http = require('http');
const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.json({ "API Template" : "v1.0.0" })
});

const port = process.env.PORT || 1337;

app.listen(port, function() {
  console.log("App running on port 1337...")
});
