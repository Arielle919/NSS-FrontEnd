$(document).ready(initialize);

function change_div_text()
{
  var name = $('#name').val(); //.val for form elements an d.text for html elements
  var color = $('#color').val();
  $('#b').text(name).css('background-color', color);
}

function age_verification()
{
  var age = $('#age').val();
  age = parseInt(age);

  if (age < 21)
    $('#age_div').text("no drink for you!").css('background-color', 'red');
  else
    $('#age_div').text("drink but be responsible").css('background-color', 'green');
}

function initialize() {
  $('#clicker').click(change_div_text);
  $('#age_check').click(age_verification);

 // %input#age{type: 'text', placeholder: 'enter age'}
 //    %input#age_check{type: 'button', value: 'Verify Age!'}
 //    #age_div Age Verification

 // $('div').css('background-color', 'red');// selecting all divs..using css property..of bg-color to red
 // $('div').css('font-size', '25px');
 // $('div').css('color', 'blue');

 // var color = prompt("What background color do you want?");
 // $('div').css('background-color', color);
 // var size = prompt("What size font do you want?");
 // $('div').css('font-size', size);

// var selector = prompt('Which div do you want?');
// var cls = prompt('Class to add?');
// var new_text = prompt('What would you like to say?');
// $(selector).addClass(cls);
// $(selector).text(new_text);

// var selector_to_hide = prompt('Which node do you want to hide?');
// $(selector_to_hide).hide();
}

