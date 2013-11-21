var mongoose = require('mongoose');

var Calendar = mongoose.Schema({
  Month      : {type: String, required: true},
  TotalDays  : Number,
  Year       : Number,
  // isComplete : {type: Boolean, default: false},
  user       : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  createdAt  : {type: Date, default: Date.now}
});

mongoose.model('Calendar', Calendar);