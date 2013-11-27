var mongoose = require('mongoose');

var Project = mongoose.Schema({
  title      : String,
  date       : String,
  time       : String,
  user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content    : String
});

mongoose.model('Project', Project);