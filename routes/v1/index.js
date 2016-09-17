'use strict';
const express = require('express');
const router = express.Router();
const app = require('../../app');

router.get('/', function(req, res) {
  res.status(200).json({ Status: 'API Template', Version: app.config.version, Environment: app.env });
});

module.exports = router;