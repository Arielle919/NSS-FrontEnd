'use strict';

$(document).ready(initialize)

function initialize()
{
  $('#addtask').click(addTask);
  $('table').on('click', '.delete', deleteTask);
  $('table').on('click', '.goUp, .goDwn', moveMe);
  $('table').on('click', '.checkbox', strike);

}

$('#typeDate').focus();

function strike()
{
  var $button = $(this);
  var $line = $button.parent().parent();
  if ($button.prop('checked'))
  {
    $line.css('background-color','gray');
    $line.css('text-decoration','line-through');
  }else{
    $line.css('background-color','white');
    $line.css('text-decoration','none');
  }
}

function moveMe()
{
  var $img = $(this);
  var $tr = $img.parent().parent();

  if($img.hasClass('goUp')){
    if(!$tr.prev().hasClass('home')){
      $tr.prev().before($tr);
    }
  } else {
    $tr.next().after($tr);
  }

}

function deleteTask()
{
  var $button = $(this);
  var $line = $button.parent().parent();
  $line.remove();
}

function addTask()
{
  var $tr = $('<tr>');
  $tr.addClass('output');

  var $date = $('<td>');//op
  $date.addClass('date');
  var number = $('#typeDate').val();
  var dateNumbers = number.split(',');
  number = parseInt(number,10);
  $date.text(dateNumbers);

  var $task = $('<td>');
  var tasktype = $('#typeTask').val();
  var tasks = tasktype.split('  ');
  $task.text(tasks);//op
  $task.addClass('task');


  var $colorsection = $('<td>');
  var $colorBox = $(this);
  $colorBox = $('<div>');
  var colorType = $('#typeColor').val();
  $colorBox.css('background-color', colorType);//op
  $colorBox.addClass('colorBox');


  var $checkBox = $('<td>');//op
  var $checkBoxA = $('<input>');
  $checkBoxA.attr('type', 'checkbox');
  $checkBoxA.addClass('checkbox');
  $checkBox.addClass('checkbox');


  var $del = $('<td>');//op
  var $deleteBtn = $('<input>');
  $deleteBtn.attr('type', 'button');
  $deleteBtn.val('delete');
  $deleteBtn.addClass('delete');

  var $upDwn = $('<td>');//op
  $upDwn.addClass('upDwn');
  var $arrowUp = $('<img>').attr('src','images/uparrow.png');
  $arrowUp.addClass('goUp');
  var $arrowDwn = $('<img>').attr('src', 'images/dwnarrow.png');
  $arrowDwn.addClass('goDwn');

  var $table = $('table');
  $table.addClass('tab1');

  $colorsection.append($colorBox);
  $checkBox.append($checkBoxA);
  $del.append($deleteBtn);
  $upDwn.append($arrowUp, $arrowDwn);
  $tr.append($date, $task, $colorBox, $checkBox, $del, $upDwn);
  $table.append($tr);

  $('#typeDate').val('');
  $('#typeTask').val('');
  $('#typeColor').val('');
  $('#typeDate').focus();
}



