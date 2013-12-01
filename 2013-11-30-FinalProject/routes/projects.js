var mongoose = require('mongoose');
var Project = mongoose.model('Project');
var _ = require('lodash');
var Todo = mongoose.model('Todo');

/*
 * GET /project
 */

exports.index = function(req, res){
  req.body.user = res.locals.user;
  res.render('projects/index', {title: 'KEEP UP: Project', user: res.locals.user, todos: res.locals.todos,  projects: res.locals.projects});
};

/*
 * GET /projects/new
 */

exports.new = function(req, res){
  req.body.user = res.locals.user;
  res.render('projects/new', {title: 'KEEP UP: Create Project',todos: res.locals.todos});
};

/*
 * POST /projects
 */

exports.create = function(req, res){
  // console.log('before save');
  // console.log(req.body);
  req.body.user = res.locals.user;
  new Project(req.body).save(function(err, project, count){
    // console.log('after save');
    // console.log(appointment);
    res.redirect('/projects');
  });

};


exports.createTask = function(req, res){
  req.body.user = res.locals.user;

  new Todo(req.body).save(function(err, todo, count){
    res.send(todo);
  });
};

exports.updateTask = function(req, res){
  Todo.findById(req.params.id, function(err, todo){
    todo.isComplete = !todo.isComplete;
    todo.save(function(err, todo){
      res.send(todo);
    });
  });
};
