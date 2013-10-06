$(document).ready(initialize)

function initialize()
{
 ('#addTask').click(addTask);

}

function addTask()
{
  var $tr = $('<tr>');
  var $date = $('<td>');
  $date.addClass('date');
  var typeDate = ('#typeDate');
  // $date.split('//');
  var $task = $('<td>');
  $task.addClass('task');
  var $colorBox = $('<td>');
  $colorBox.addClass('colorBox');
  var $checkBox = $('<td>');
  $checkBox.addClass('checkBox');
  var $deleteBtn = $('<td>');
  $deleteBtn.addClass('deleteBtn');
  var $upDwn = $('<td>');

  $date.text('#typeDate');

}



function addRow()
{
  var $tr = $('<tr>');
  var $name = $('<td>');
  $name.addClass('name');
  var $food = $('<td>');
  $food.addClass('food');
  var $ctrl = $('<td>');
  $ctrl.addClass('ctrl');
  var $del = $('<td>');
  $del.addClass('delete');
  var $updown = $('<td>');
  $updown.addClass('home');

  var $input = $('<input>');
  $input.attr('type', 'text');

  var $button = $('<input>');
  $button.attr('type', 'button');
  $button.val('RSVP!');
  $button.addClass('rsvp');

  var $buttonDel = $('<input>');  //delete button details
  $buttonDel.attr('type', 'button');
  $buttonDel.val('delete');
  $buttonDel.addClass('delete');

  var $arrowdwn = $('<img>').attr('src','images/arrow.png' ); //arrow button details
  $arrowdwn.addClass('goDown');
  var $arrowup = $('<img>').attr('src','images/Uparrow.png' );
  $arrowup.addClass('goUp');

  $ctrl.append($input, $button);
  $del.append($buttonDel);
  $updown.append($arrowup, $arrowdwn);
  $tr.append($name, $food, $ctrl, $del, $updown);
  $('table').append($tr);

  $input.focus();

}