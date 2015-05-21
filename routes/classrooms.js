var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send({classrooms: 'Are awesome'});
});

module.exports = router;
