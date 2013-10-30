/*
 * GET colors page.
 */
var fs = require('fs');


exports.index = function(req, res){
  var data = fs.readFileSync('colors.json');//reads file 1st
  var colors = JSON.parse(data);
   // var colors = ['blue','red', 'orange', 'purple', 'pink', 'green'];
   res.render('colors/index', {title: 'Color Page', colors: colors});//property:value
};

exports.new = function(req, res){
   res.render('colors/new',{title: 'New Color'}); //showing user a form
};

exports.create = function(req, res){
  var color = req.body.color;
  var data = fs.readFileSync('colors.json');//reads file 1st
  var colors = JSON.parse(data);//converts in into a object

  colors.push(color);//push object into array

  fs.writeFileSync('colors.json', JSON.stringify(colors));//save color to file and trun object into a string

  res.redirect('/colors');
};