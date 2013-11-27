var mongoose = require('mongoose');
var Project = mongoose.model('Project');


/*
 * GET /project
 */

exports.index = function(req, res){
  req.body.user = res.locals.user;
  res.render('project/index', {title: 'KEEP UP: Project', user: res.locals.user, projects: res.locals.projects});
};

/*
 * GET /project/new
 */

exports.new = function(req, res){
  req.body.user = res.locals.user;
  res.render('project/new', {title: 'KEEP UP: Create Project'});
};

/*
 * POST /project
 */

exports.create = function(req, res){
  // console.log('before save');
  // console.log(req.body);
  req.body.user = res.locals.user;
  new Project(req.body).save(function(err, project, count){
    // console.log('after save');
    // console.log(appointment);
    res.redirect('/project');
  });

};

/*
 * POST /project/:id/delete
 */

exports.delete = function(req, res){
  Project.findByIdAndRemove(req.params.id, function(err, project){
    res.redirect('/project');
  });
};

/*
 * GET /project/:id/edit
 */

exports.edit = function(req, res){
  Project.findById(req.params.id, function(err, project){
    res.render('project/edit', {title: 'Edit Project', project: project});
  });
};

/*
 * PUT /project/:id
 */

exports.update = function(req, res){
  Project.findByIdAndUpdate(req.params.id, req.body, function(err, project){
    res.redirect('/project');
  });
};


