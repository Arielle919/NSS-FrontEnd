'use strict';

$(document).ready(initialize);

// debugger;

function initialize(){
  $('#add_color').click(addColor);
  $('#addbox').click(addBox);
  $('#colors').on('click', '.box', colorPalatteClicked);
  $('#boxes').on('mouseover', '.minibox', canvasHover);
}

function canvasHover(){
  var $canvas = $(this);
  var brushColor = $('#brush').css('background-color');
  $canvas.css('background-color', brushColor);
}

function colorPalatteClicked(){
  var $box = $(this);
  var color = $box.css('background-color');
  $('#brush').css('background-color', color);
}

function addColor(){
  var color = $('#color').val();
  var $div = $('<div>');
  $div.addClass('box');
  $div.css('background-color', color);

  $('#colors').prepend($div);
  clearInputAndFocus();
}

function clearInputAndFocus(){
  $('#color').val('');
  $('#color').focus();
}

function addBox(){
  var boxNumbers = $('#amount').val();
  boxNumbers = parseInt(boxNumbers, 10);
  for (var i =0; i < boxNumbers; i++)
  {
    var $div = $('<div>');
    $div.addClass('minibox');

    $('#boxes').append($div);
  }

}

