var mongoose = require('mongoose');

var Financial = mongoose.Schema({
  title         : String,
  DueDate       : String,
  DatePaid      : String,
  Amount        : String,
  AmountPaid    : String,
  Balance       : String,
  user          : {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Financial', Financial);

