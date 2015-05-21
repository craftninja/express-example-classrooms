var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // res.send({classrooms: 'Are awesome'});
  var classroomData = ['Lecture Hall', 'Work Lab'];
  res.render('classrooms/index', {classrooms: classroomData})
});

module.exports = router;
