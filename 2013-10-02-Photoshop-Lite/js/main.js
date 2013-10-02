$(document).ready(initialize)

function initialize()
{
  $('#colorbtn').click(makeBoxes);
  // $('#inputColor').focus();
}


function makeBoxes()
{
  var inputColor = $('#inputColor').val();
  // var colors = inputColor.split('');
  // for (i = 0; i < colors.length; i++)

  var $colorBox = $('<div>');
  $colorBox.addClass('box');
  $colorBox.css('background-color', inputColor);

  $('#boxDisplay').prepend($colorBox);
  clearInput();

  // $div.text(colors[i]);

}


function clearInput()
{
   $('#inputColor').val('');
   $('#inputColor').focus();
}