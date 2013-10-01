$(document).ready(initialize);

function initialize()
{
  $('#add').click(compute_sum);

}


function add(a, b)
{
return a + b;
}

function compute_sum()
{
var num1 = $('#num1').val();
var num2 = $('#num2').val();

num1 = parseInt(num1);
num2 = parseInt(num2);

var sum = add(num1, num2);
$('#result').text(sum);
}




// $(document).ready(initialize);

// function initialize()
// {
// $('#button1').click(change_green);
// $('#name_btn').click(count_letters);
// }

// function change_green()
// {
//   $('#green').css({'background-color':'green', 'color':'yellow'});
// }

// function count_letters()
// {
//   var name = $('#name_txt').val();
//   // var length = name.length;
//   $('#name_div').text(name + ' is ' + name.length + ' characters long');
// }