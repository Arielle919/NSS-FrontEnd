'use strict';
//firebase schema
var Δdb;
var Δpeople;
//local schema
var db = {};
db.people = [];

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#addPerson').click(addPerson);
  Δdb = new Firebase('https://addressbook-919.firebaseio.com/');
  Δpeople = Δdb.child('people');

  Δpeople.on('child_added', addMorePeople);
}

function addPerson()
{
  var name = $('#name').val();
  var address = $('#address').val();
  var website = $('#website').val();
  var email = $('#email').val();
  var photo = $('#photo').val();

  var person = {};
  person.name = name;
  person.address = address;
  person.website = website;
  person.email = email;
  person.photo = photo;

  Δpeople.push(person);

}

function addMorePeople(snapshot)
{
  var human = snapshot.val();
  createPerson(human);
  db.people.push(human);
}

function createPerson(human)
{
  var $div = $('<div>');
  $div.addClass('personBox');

  $div.append(human.name + '<br>', human.address+ '<br>', human.website+ '<br>', human.email+ '<br>', human.photo);
  $('#AddressBook').prepend($div);

  $('#name').val('');
  $('#address').val('');
  $('#website').val('');
  $('#email').val('');
  $('#photo').val('');

  $('#name').focus();
}
