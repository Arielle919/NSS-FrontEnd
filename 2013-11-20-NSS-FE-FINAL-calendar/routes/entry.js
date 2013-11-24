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


