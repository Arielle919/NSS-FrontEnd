var mongoose = require('mongoose');

var Contact = mongoose.Schema({
  name         : String,
  number       : String,
  address      : String,
  user         : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  email        : String,
  groups       : String
});

mongoose.model('Contact', Contact);