var mongoose = require('mongoose');
var General = mongoose.model('General');

exports.index = function(req, res){
  console.log('general.index');
  res.render('general/index', {title: 'KEEP UP: General', user: res.locals.user});
};

/*
 * GET /general/new
 */

exports.new = function(req, res){
  req.body.user = res.locals.user;
  res.render('general/new', {title: 'KEEP UP: General Task'});
};

/*
 * POST /general
 */

exports.create = function(req, res){
  // console.log('before save');
  // console.log(req.body);
  req.body.user = res.locals.user;
  new General(req.body).save(function(err, general, count){
    // console.log('after save');
    // console.log(appointment);
    res.redirect('/general');
  });

};

/*
 * POST /general/:id/delete
 */

exports.delete = function(req, res){
  General.findByIdAndRemove(req.params.id, function(err, general){
    res.redirect('/general');
  });
};

/*
 * GET /general/:id/edit
 */

exports.edit = function(req, res){
  General.findById(req.params.id, function(err, general){
    res.render('general/edit', {title: 'Edit Task', general: general});
  });
};

/*
 * PUT /general/:id
 */

exports.update = function(req, res){
  General.findByIdAndUpdate(req.params.id, req.body, function(err, general){
    res.redirect('/general');
  });
};







