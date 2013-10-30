var database = require('../modules/database');
/*
 * GET /people page.
 */

exports.index = function(req, res){
  var people = database.read(__dirname + '/../db/people.json');
  res.render('people/index', { title: 'People: Address Book', people: people });
};

/*
 * GET /people/new page.
 */

exports.new = function(req, res){
  res.render('people/new', { title: 'New Person: Address Book' });
};

/*
 * Post /people.
 */

exports.create = function(req, res){
  var name = req.body.name; //body.name comes from name on form
  var gender = req.body.gender;
  var age = parseInt(req.body.age);
  var color = req.body.color;

  var people = database.read(__dirname + '/../db/people.json');
  var person = {name: name, gender: gender, age: age, color: color};
  people.push(person);

  database.write(__dirname + '/../db/people.json', people);

  res.redirect('/people');
};

