var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');
var Financial = mongoose.model('Financial');

exports.index = function(req, res){
  console.log('financial.index');
  res.render('financial/index', {title: 'KEEP UP: Bills', user: res.locals.user});
};

/*
 * GET /financial/new
 */

exports.new = function(req, res){
  req.body.user = res.locals.user;
  res.render('financial/new', {title: 'KEEP UP: Create Bill'});
};

/*
 * POST /financial
 */

exports.create = function(req, res){
  // console.log('before save');
  // console.log(req.body);
  req.body.user = res.locals.user;
  new Financial(req.body).save(function(err, financial, count){
    // console.log('after save');
    // console.log(appointment);
    res.redirect('/financial');
  });

};

/*
 * POST /financial/:id/delete
 */

exports.delete = function(req, res){
  Financial.findByIdAndRemove(req.params.id, function(err, financial){
    res.redirect('/financial');
  });
};

/*
 * GET /financial/:id/edit
 */

exports.edit = function(req, res){
  Financial.findById(req.params.id, function(err, financial){
    res.render('financial/edit', {title: 'Edit Bill', financial: financial});
  });
};

/*
 * PUT /financial/:id
 */

exports.update = function(req, res){
  Financial.findByIdAndUpdate(req.params.id, req.body, function(err, financial){
    res.redirect('/financial');
  });
};





