'use strict';

var timer;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#start').click(startRandom);
  $('#stop').click(stop);
}

function startRandom()
{
  var Delayinput = $('#delay').val();
  Delayinput = parseFloat(Delayinput, 10) * 1000;
  timer = setInterval(createBoxes, Delayinput);

}

function createBoxes()
{
  var dimensions = $('#dimensions').val();
  dimensions = dimensions.split(', ');
  var width = dimensions[0];
  var height = dimensions[1];

  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var alpha = Math.random();
  var rgba = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha +')';

  var $box = $('<div>');
  $box.addClass('box');
  $box.css('width',width).css('height',height).css('background-color',rgba);
  $('#colors').prepend($box);
}

function stop()
{
  clearInterval(timer);
}