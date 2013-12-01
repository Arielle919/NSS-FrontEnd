var mongoose = require('mongoose');

var Project = mongoose.Schema({
  title      : String,
  startDate  : String,
  endDate    : String,
  startTime  : String,
  endTime    : String,
  user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content    : String
});

mongoose.model('Project', Project);