'use strict';

var accountBalance = 0;

$(document).ready(initialize)

function initialize()
{
  $('#logoBtn').click(createLogo);
  $('#balBtn').click(createBal);
  $('#depositBtn').click(addBal);
  $('#withdrawBtn').click(subtractBal);
  $('#depOutput').on('click', '.deplist', finalAdd);
  $('#withOutput').on('click', '.withlist', finalSubtract);
}


function finalAdd()
{
  var $number = $(this).remove();

  var $balance = $('#balance').val();
  var $amount = $('#amount').val();
  $balance = parseInt($balance, 10);
  $amount = parseInt($amount, 10);
  var subtract;
  accountBalance = parseInt(accountBalance, 10);
  subtract = $balance - $amount;
  $('#balance').val(subtract);

}

function finalSubtract()
{
  var $number = $(this).remove();

  var $balance = $('#balance').val();
  var $amount = $('#amount').val();
  $balance = parseInt($balance, 10);
  $amount = parseInt($amount, 10);
  var adding;
  accountBalance = parseInt(accountBalance, 10);
  adding = $balance + $amount;
  $('#balance').val(adding);
}

function createLogo()
{
  var url = $('#logoInput').val();
  var $logoPic = $('<div>');
  var $logo = $('#logo').attr('src', url);
  $logo.append($logoPic);
  $('#logoInput').remove();
  $('#logoBtn').remove();
}

function createBal()
{
  var $balInput = $('#balInput').val();
  var $balance = $('#balance').val();
  accountBalance = parseInt(accountBalance, 10);
  $balance = parseInt($balance, 10);
  $balInput = parseInt($balInput, 10);
  $balance += accountBalance;
  $('#balance').val($balInput);
  $('#amount').focus();
  $('#balInput').remove();
  $('#balBtn').remove();

}

function subtractBal()
{
  var $balance = $('#balance').val();
  var $amount = $('#amount').val();
  $balance = parseInt($balance, 10);
  $amount = parseInt($amount, 10);
  var subtract;
  accountBalance = parseInt(accountBalance, 10);
  subtract = $balance - $amount;
  $('#balance').val(subtract);

  var $depositNums = $('<li>');
  $depositNums.addClass('withlist');
  $depositNums.text($amount);

  $('#withOutput').append($depositNums);
}

function addBal()
{
  var $balance = $('#balance').val();
  var $amount = $('#amount').val();
  $balance = parseInt($balance, 10);
  $amount = parseInt($amount, 10);
  var adding;
  accountBalance = parseInt(accountBalance, 10);
  adding = $balance + $amount;
  $('#balance').val(adding);

  var $depositNums = $('<li>');
  $depositNums.addClass('deplist');
  $depositNums.text($amount);

  $('#depOutput').append($depositNums);
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