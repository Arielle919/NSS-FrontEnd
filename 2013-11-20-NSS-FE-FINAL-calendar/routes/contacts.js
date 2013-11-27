var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

/*
 * GET /contact page
 */

exports.index = function(req, res){
  req.body.user = res.locals.user;
  Contact.find(function (err, contacts) {
    res.render('contact/index', {title: 'KEEP UP: Contacts', contacts: contacts});
  });
};

/*
 * GET /contact/new
 */

exports.new = function(req, res){
  req.body.user = res.locals.user;
  res.render('contact/new', {title: 'KEEP UP: Create Contact'});
};

exports.create = function(req, res){
  req.body.user = res.locals.user;

  new Contact(req.body).save(function(err, contact){
    res.redirect('/contact');
  });
};

/*
 * GET /contact/:id page
 */

exports.show = function(req, res){
  Contact.findById(req.params.id, function(err, contact){
    res.render('contact/show', {title: 'KEEP UP: Contact', contact: contact});
  });
};

/*
 * POST /contact/:id/delete
 */

exports.delete = function(req, res){
  Contact.findByIdAndRemove(req.params.id, function(err, contact){
    res.redirect('/contact');
  });
};

/*
 * GET /contact/:id/edit
 */

exports.edit = function(req, res){
  Contact.findById(req.params.id, function(err, contact){
    res.render('contact/edit', {title: 'Edit Contact', contact: contact});
  });
};

/*
 * PUT /contact/:id
 */

exports.update = function(req, res){
  Contact.findByIdAndUpdate(req.params.id, req.body, function(err, contact){
    res.redirect('/contact');
  });
};
