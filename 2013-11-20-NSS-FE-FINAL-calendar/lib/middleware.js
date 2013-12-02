var mongoose = require('mongoose');
var User = mongoose.model('User');
var Contact = mongoose.model('Contact');
var Project = mongoose.model('Project');
var Financial = mongoose.model('Financial');
var General = mongoose.model('General');


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

exports.getFinancial = function(req, res, next){
  if(res.locals.user){
      Financial.find({user: res.locals.user}, function(err, financials){
        res.locals.financials = financials;
        next();
      });
    } else {
      res.locals.financials = [];
      next();
  }
};

exports.getGeneral = function(req, res, next){
  if(res.locals.user){
      General.find({user: res.locals.user}, function(err, generals){
        res.locals.generals = generals;
        next();
      });
    } else {
      res.locals.generals = [];
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
