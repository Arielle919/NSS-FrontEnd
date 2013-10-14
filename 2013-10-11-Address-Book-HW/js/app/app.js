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
  $('#AddressBook').on('dblclick','.personBox', removePerson);
  Δdb = new Firebase('https://addressbook-919.firebaseio.com/');
  Δpeople = Δdb.child('people');

  Δpeople.on('child_added', addMorePeople);
  Δpeople.on('child_removed', removePerson);
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


  $('#name').val('');
  $('#address').val('');
  $('#website').val('');
  $('#email').val('');
  $('#photo').val('');

  $('#name').focus();

}

function addMorePeople(snapshot)
{
  var human = snapshot.val();
  createPerson(human);
  removePerson(human);
  db.people.push(human);
}

function createPerson(human)
{
  var div = '<div class="person"><br><img class="photo"><br><p class="name"></p><br><p class="address"></p><br><a class="website" href= http:// + person.website></a><br><a class="email" href= mailto: + "person.email"></a></div>';
  var $div =  $(div);
  $div.addClass('personBox');

  $div.children('.photo').attr('src', human.photo);
  $div.children('.name').text(human.name);
  $div.children('.address').text(human.address);
  $div.children('.website').text(human.website);
  $div.children('.email').text(human.email);

  $('#AddressBook').prepend($div);

}

function removePerson(human)
{
  var $human = $(this);
  $human.remove();
}