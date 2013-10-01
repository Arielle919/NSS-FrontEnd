$(document).ready(initialize);

function initialize()
{
$('#button1').click(change_green);
$('#name_btn').click(count_letters);
}

function change_green()
{
  $('#green').css({'background-color':'green', 'color':'yellow'});
}

function count_letters()
{
  var name = $('#name_txt').val();
  // var length = name.length;
  $('#name_div').text(name + ' is ' + name.length + ' characters long');
}

// var name = $('#name').val(); //.val for form elements an d.text for html elements
//   var color = $('#color').val();
//   $('#b').text(name).css('background-color', color);

// %input#name_txt{type: 'text', value: 'Enter your name'}
//     %input#name_btn{type: 'button', value: 'Count the characters!'}
//     #name_div BLANK

//     function age_verification()
// {
//   var age = $('#age').val();
//   age = parseInt(age);

//   if (age < 21)
//     $('#age_div').text("no drink for you!").css('background-color', 'red');
//   else
//     $('#age_div').text("drink but be responsible").css('background-color', 'green');
// }