var mongoose = require('mongoose');

var General = mongoose.Schema({
  title      : String,
  date       : String,
  time       : String,
  isComplete : {type: Boolean, default: false},
  user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content    : String
});

mongoose.model('General', General);