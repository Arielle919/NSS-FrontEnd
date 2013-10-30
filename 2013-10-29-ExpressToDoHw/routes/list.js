var database = require('../modules/database');
/*
 * GET list .
 */

exports.index = function(req, res){
  var list = database.read(__dirname + '/../db/list.json');
  res.render('list/index', { title: 'List: To Do App', list: list });
};

/*
 * GET NEW list .
 */

exports.new = function(req, res){
  res.render('list/new', { title: 'NEW List : To Do App' });
};

/*
 * Post list .
 */


exports.create = function(req, res){
  var name = req.body.name; //body.name comes from name on form
  var Date = req.body.Date;
  // var age = parseInt(req.body.age);
  var color = req.body.color;

  var items = database.read(__dirname + '/../db/list.json');
  var item = {name: name, Date: Date, color: color};
  items.push(item);

  database.write(__dirname + '/../db/list.json', items);
  res.redirect('/list');
};