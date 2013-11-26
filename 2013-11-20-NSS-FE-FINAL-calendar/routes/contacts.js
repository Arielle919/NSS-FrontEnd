var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

/*
 * GET /contact page
 */

exports.index = function(req, res){
  req.body.user = res.locals.user;
  Contact.find(function (err, contacts) {
    res.render('contact/index', {title: 'KEEP UP: Contacts', contacts: contacts});
  })
};

// Appointment.find(function(err, appointments){
  // res.render('entry/index', {title: 'KEEP UP: Entry', user: res.locals.user, appointments: res.locals.appointments});
  // });

// exports.index = function(req, res){
//   console.log('home.index');
//   res.render('home/index', {title: 'KEEP UP', user: res.locals.user, todos: res.locals.todos});
// };


exports.create = function(req, res){
  req.body.user = res.locals.user;

  new Contact(req.body).save(function(err, contact){
    res.redirect('/contact');
  });
};



/*
 * GET /contact/new
 */

// exports.new = function(req, res){
//   req.body.user = res.locals.user;
//   res.render('contact/new', {title: 'KEEP UP: New Contact'});
// };