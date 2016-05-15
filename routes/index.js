var express = require('express');
var router = express.Router();
var db = require('praise.js');
var parse = require('../lib/body-parser');
var getResults = require('../lib/results');



/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public'
  })
});

module.exports = router;
