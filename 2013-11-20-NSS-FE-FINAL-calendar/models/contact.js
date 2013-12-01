var mongoose = require('mongoose');

var Contact = mongoose.Schema({
  name         : String,
  number       : String,
  address      : String,
  birthday     : String,
  user         : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  email        : String
});

mongoose.model('Contact', Contact);

