var balance = 1000;

$(document).ready(initialize)

function initialize()
{
$('#dep_btn').click(dep_sum);
$('#with_btn').click(with_sum);
}

function adding(num1, num2)
{
return num1 + num2;
}

function subtracting(num1, num2)
{
return num1 - num2;
}

function dep_sum()
{
var amount = $('#amount').val();
amount = parseInt(amount);
balance = adding(balance, amount);
$('#balance').val(balance);

if(balance >= 0)
 $('#balance').removeClass('negative');
}

function with_sum()
{
var amount = $('#amount').val();
amount = parseInt(amount);
balance = subtracting(balance, amount);
// var balance = parseInt($('#balance'))
$('#balance').val(balance);

if(balance < 0)
 $('#balance').addClass('negative');
}
