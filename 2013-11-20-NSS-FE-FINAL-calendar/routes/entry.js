var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

/*
 * GET entry page.
 */

exports.index = function(req, res){
  console.log('entry.index');
  // Appointment.find(function(err, appointments){
  res.render('entry/index', {title: 'KEEP UP: Entry', user: res.locals.user, appointments: res.locals.appointments});
  // });
};

/*
 * POST /entry/:id/delete
 */

exports.delete = function(req, res){
  Appointment.findByIdAndRemove(req.params.id, function(err, appointment){
    res.redirect('/entry');
  });
};

/*
 * GET /entry/:id/edit
 */

exports.edit = function(req, res){
  Appointment.findById(req.params.id, function(err, appointment){
    res.render('entry/edit', {title: 'Edit Appointment', appointment: appointment});
  });
};

/*
 * PUT /entry/:id
 */

exports.update = function(req, res){
  Appointment.findByIdAndUpdate(req.params.id, req.body, function(err, appointment){
    res.redirect('/entry');
  });
};
