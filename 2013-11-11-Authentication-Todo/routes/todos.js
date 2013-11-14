var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

exports.create = function(req, res){
  req.body.user = res.locals.user; //taking the user and putting it into todos for use

  new Todo(req.body).save(function(err, todo){
    res.send(todo);
  });
};

exports.update = function(req, res){
  Todo.findById(req.params.id, function(err, todo){ //find that todo in param
    todo.isComplete = !todo.isComplete; //switch that todo back to not complete
    todo.save(function(err, todo){//then save that todo
      res.send(todo);
    });
  });
};
