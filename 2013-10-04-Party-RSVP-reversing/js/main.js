'use strict';

$(document).ready(initialize)

function initialize()
{
  $('#add').click(addRow);
  $('table').on('click', '.rsvp', rsvp);
  $('table').on('click', '.delete', removeLine);
  $('table').on('click', '.goUp, .goDown', moveMe);

}

function moveMe()
{
  var $img = $(this);
  var $tr = $img.parent().parent();
  var $td = $('<td>');

  if($img.hasClass('goUp')){
    if(!$tr.prev().hasClass('home')){
      $tr.prev().before($tr);
    }
  } else {
    $tr.next().after($tr);
  }
}


function removeLine()
{
  var $button = $(this);
  var $line = $button.parent().parent();
  $line.remove();
}

function rsvp()
{
  var $button = $(this);
  var $textbox = $button.prev();
  var text = $textbox.val();
  var items = text.split(', ');
  var name = items[0];
  var food =items[1];

  var $tdName = $button.parent().prev().prev();
  var $tdFood = $button.parent().siblings('.food');

  $tdName.text(name);
  $tdFood.text(food);

  $button.parent().parent().parent().parent().siblings('#add').focus();
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

//Teacher lecture 10/4/13
// $('header').children(); //this selects all of headers children
// $('header').children('h1');//show me all the children that are of this type
// $('header > h1');// find the header then under that find the h1
// $('header > h1').parent(); //selects only the parent
// $('header > h1').parents(); //selects  the parent, granddaddy or body then great dad html
// $('input'); //selects all the inputs
// $('input').parent();// this selects all the parents on all of the inputs
// $('header > h1').siblings(); //selects all of h1 children
// $('header > h1').siblings('img'); //selects all of h1 children that are of type images
// $('header > h1').next(); //selects the element right next to the h1
// $('header > h1').next().next(); /*selects the element right
// next to the h1 and the element next to that one*/
// $('header > h1').next().next().prev(); /*selects the element right next to the h1 twice the
// goes back up with the prev*/
// $('#set_logo').closest('div');//finds closes div