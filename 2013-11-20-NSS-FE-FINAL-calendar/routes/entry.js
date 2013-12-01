var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');
var Project = mongoose.model('Project');

/*
 * GET entry page.
 */

exports.index = function(req, res){
  console.log('entry.index');
  // Appointment.find(function(err, appointments){
  res.render('entry/index', {title: 'KEEP UP: Entry', user: res.locals.user, projects: res.locals.projects, contacts: res.locals.contacts});
  // });
};