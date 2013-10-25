'use strict';
var results = [];
var sumresults = [];
var pdtresults = [];

$(document).ready(initialize);

function initialize(fn, flag){
  if(!canRun(flag)) {return;}

  $(document).foundation();
  $('#calculate').click(clickCalculate);
  $('#history').on('click', '.delete', clickDelete);
  $('#sum').click(clickSum);
  $('#product').click(clickProduct);
  $('#neg').click(clickNeg);
  $('#op1').focus();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clickCalculate(){
  var op1 = getValue('#op1');
  var op2 = getValue('#op2');
  var operator = getValue('#operator');
  var computation = op1 + operator + op2;
  var result = eval(computation);
  htmlUpdateResult(result);
  htmlAddToPaperTrail(op1, operator, op2, result);

}

function clickDelete(){
  var $li = $(this).parent();
  $li.remove();
}

function clickNeg(){

  // $('span.result').not(':contains("-")').parent().remove();
  $('span.result:contains("-")').parent().remove();
  // var sum = 0;
  // for (var i = 0; i < results.length; i++)
  // {
  //   sum = results[i];
  //   filter_Negative(sum);
  // }
  // // var $sum = sum;
  // // $sum = $(this).parent;
  // // $sum.remove();
  // var $resultneg = $('#result');
  // sum = $resultneg;
  // sum.parent('li').remove();
}

function clickSum()
{
  var sum = 0;
  for (var i = 0; i < sumresults.length; i++)
  {
    sum += sumresults[i];
  }

  $('#sumOutput').text(sum);
}

function clickProduct()
{
  var sum = 1;
  for (var i = 0; i < pdtresults.length; i++)
  {
    sum *= pdtresults[i];
  }

  $('#productOutput').text(sum);
}
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function htmlUpdateResult(result){
  $('#result').val(result);
  results.push(result);
  sumresults.push(result);
  pdtresults.push(result);
}

function htmlAddToPaperTrail(op1, operator, op2, result){
  var $li = $('<li>');
  var spans = '<span class="op1">' + op1 + '</span><span class="operator">' + operator + '</span><span class="op2">' + op2 + '</span><span class="equal">=</span><span class="result">' + result + '</span><span class="delete">X</span>';
  var $spans = $(spans);
  $li.append($spans);
  $('#history').prepend($li);
  $('#op1').focus();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function canRun(flag){
  var isQunit = $('#qunit').length > 0;
  var isFlag = flag !== undefined;
  var value = isQunit && isFlag || !isQunit;
  return value;
}

function filter_Negative(numbers)
{
  return _.filter(numbers, function(num) {return (num % -1) ===0;});
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //