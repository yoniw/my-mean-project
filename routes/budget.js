var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function(req, res, next) {

});

/* POST BUDGET */
router.post('/', function(req, res, next) {
    console.log (' **************** Inside budget.js POST **************** ');
  });

router.put('/:id', function(req, res, next) {

});

router.delete('/:id', function(req, res, next) {

});

module.exports = router;