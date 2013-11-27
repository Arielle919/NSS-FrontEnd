var mongoose = require('mongoose');
var User = mongoose.model('User');
var Todo = mongoose.model('Todo');
var Contact = mongoose.model('Contact');
var Project = mongoose.model('Project');

exports.findUser = function(req, res, next){
  if(req.session.userId){
    User.findById(req.session.userId, function(err, user){
      if(user){
        res.locals.user = user;
        next();
      }
    });
  } else {
    next();
  }
};

exports.getTodos = function(req, res, next){
  if(res.locals.user){
    Todo.find({user: res.locals.user}, function(err, todos){
      res.locals.todos = todos;
      next();
    });
  } else {
    res.locals.todos = [];
    next();
  }
};

exports.getContacts = function(req, res, next){
  if(res.locals.user){
    Contact.find({user: res.locals.user}, function(err, contacts){
      res.locals.contacts = contacts;
      next();
    });
  } else {
    res.locals.contacts = [];
    next();
  }
};

exports.getProjects = function(req, res, next){
  if(res.locals.user){
    Project.find({user: res.locals.user}, function(err, projects){
      res.locals.projects = projects;
      next();
    });
  } else {
    res.locals.projects = [];
    next();
  }
};

exports.isAdmin = function(req, res, next){
  if(res.locals.user.isAdmin){
    next();
  } else {
    res.end('you are not an admin');
  }
};
