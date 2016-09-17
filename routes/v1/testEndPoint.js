'use strict';
const express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var username = req.query.username;
  if (!username) {
    res.status(400).json({ error: 'Required parameter username is missing' });
    return;
  }

  res.status(200).json({ username: username });

})

module.exports = router;