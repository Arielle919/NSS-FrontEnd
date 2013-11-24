var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

/*
 * GET /appointment/new
 */

exports.new = function(req, res){
  req.body.user = res.locals.user;
  res.render('appointment/new', {title: 'KEEP UP: New Appointment'});
};

/*
 * POST /appointments
 */

exports.create = function(req, res){
  // console.log('before save');
  // console.log(req.body);
  req.body.user = res.locals.user;
  new Appointment(req.body).save(function(err, appointment, count){
    // console.log('after save');
    // console.log(appointment);
    res.redirect('/entry');
  });

};

