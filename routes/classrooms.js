var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var Classroom = mongoose.model('Classroom');

router.get('/', function(req, res) {
  Classroom.find({}, function(err, classrooms) {
    if (err) console.log(err);
    res.render('classrooms/index', {classrooms: classrooms})
  });
});

router.get('/new', function(req, res) {
  res.render('classrooms/new');
});

router.post('/', function(req, res) {
  classroom = new Classroom({
    name: req.body['classroom[name]'],
    numberOfSeats: req.body['classroom[numberOfSeats]'],
    hasKeg: req.body['classroom[hasKeg]']
  })
  classroom.save(function (err, classroom) {
    if (err) return console.error(err);
    res.redirect('classrooms/' + classroom.id);
  });
});

router.get('/:id', function(req, res) {
  Classroom.findOne({_id: req.params.id}, function(err, classroom) {
    res.render('classrooms/show', {classroom: classroom});
  });
});

module.exports = router;
