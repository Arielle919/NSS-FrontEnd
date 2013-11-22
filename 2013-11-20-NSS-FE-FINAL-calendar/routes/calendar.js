//var mongoose = require('mongoose');
//var Calendar = mongoose.model('Calendar');

/*
 * GET calendar page.
 */

exports.index = function(req, res){
  console.log('calendar.index');
  res.render('calendar/index', {title: 'KEEP UP: Calendar'});
};


exports.create = function(req, res){
  console.log(req.body);
  res.redirect('/calendar');

};

// exports.create = function(req, res){
//   req.body.user = res.locals.user;

//   new Todo(req.body).save(function(err, todo){
//     res.send(todo);
//   });
// };

