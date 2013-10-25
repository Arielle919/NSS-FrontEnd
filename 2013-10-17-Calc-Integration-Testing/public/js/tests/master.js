'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
  initialize(null, true);
}

function teardownTest(){
}

`test('Calculate 2 numbers', function(){
  expect(4);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  deepEqual($('#op1').val(), '', 'op1 should be blank');
  deepEqual($('#op2').val(), '', 'op2 should be blank');
  deepEqual($('#operator').val(), '', 'operator should be blank');
  deepEqual($('#result').val(), '6', 'result should be 6');
});

test('Paper Trail', function(){
  expect(13);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  deepEqual($('#history > li').length, 1, 'should be 1 LIs');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  deepEqual($('#history > li').length, 2, 'should be 1 LIs');
  deepEqual($('#history > li:first-child > span').length, 6, 'should be 6 spans');
  ok($('#history > li:first-child > span:first-child').hasClass('op1'), 'should have op1 class for first span');
  ok($('#history > li:first-child > span:nth-child(2)').hasClass('operator'), 'should have operator class for first span');
  ok($('#history > li:first-child > span:nth-child(3)').hasClass('op2'), 'should have op1 class for first span');
  ok($('#history > li:first-child > span:nth-child(4)').hasClass('equal'), 'should have equal class for first span');
  ok($('#history > li:first-child > span:nth-child(5)')val('result'), 'should have result class for first span');
  ok(person).name(name), 'should have result class for first span');
  deepEqual($('#history > li:first-child > span:nth-child(1)').text(), '7', 'should have 7 in top row for op1');
  deepEqual($('#history > li:first-child > span:nth-child(2)').text(), '*', 'should have * in top row for operator');
  deepEqual($('#history > li:first-child > span:nth-child(3)').text(), '8', 'should have 8 in top row for op2');
  deepEqual($('#history > li:first-child > span:nth-child(4)').text(), '=', 'should have = in top row for equal');
  deepEqual($('#history > li:first-child > span:nth-child(5)').text(), '56', 'should have 56 in top row for result');
});

test('Remove Calculation', function(){
  expect(4);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('3');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  deepEqual($('#history > li').length, 3, 'should be 3 results');
  deepEqual($('#history > li:first-child > .result').text(), '0', 'should have 0 in top row for result');

  $('#history > li:nth-child(1) > .delete').trigger('click');

  deepEqual($('#history > li').length, 2, 'should be 2 results');
  deepEqual($('#history > li:first-child > .result').text(), '56', 'should have 56 in top row for result');
});

test('Alternating Row Colors', function(){
  expect(4);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('3');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  deepEqual($('#history > li:first-child').css('background-color'), 'rgb(120, 199, 199)', 'should be light blue background color');
  deepEqual($('#history > li:nth-child(2)').css('background-color'), 'rgb(255, 255, 255)', 'should be white background color');

  $('#history > li:nth-child(1) > .delete').trigger('click');

  deepEqual($('#history > li:first-child').css('background-color'), 'rgb(120, 199, 199)', 'should be light blue background color');
  deepEqual($('#history > li:nth-child(2)').css('background-color'), 'rgb(255, 255, 255)', 'should be white background color');
});

test('Sum UP', function(){
  expect(5);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  deepEqual($('#result').val(), '5', 'result should be 5');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  deepEqual($('#result').val(), '56', 'result should be 56');
  deepEqual($('#history > li').length, 2, 'should be 2 results');
  deepEqual($('#sumOutput').text(), '', 'Sum should be blank');
  $('#sum').trigger('click');
  deepEqual($('#sumOutput').text(), '61', 'Sum should equal 61');

});

test('Sum UP Product', function(){
  expect(5);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  deepEqual($('#result').val(), '5', 'result should be 5');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  deepEqual($('#result').val(), '56', 'result should be 56');
  deepEqual($('#history > li').length, 2, 'should be 2 results');
  deepEqual($('#productOutput').text(), '', 'Sum should be blank');
  $('#product').trigger('click');
  deepEqual($('#productOutput').text(), '280', 'Sum should equal 280');

});

test('Remove Negative', function(){
  expect(4);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('3');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  deepEqual($('#history > li').length, 3, 'should be 3 results');
  deepEqual($('#history > li:first-child > .result').text(), '0', 'should have 0 in top row for result');

  $('#history > li:nth-child(1) > .delete').trigger('click');

  deepEqual($('#history > li').length, 2, 'should be 2 results');
  deepEqual($('#history > li:first-child > .result').text(), '56', 'should have 56 in top row for result');
});

test( 'Filter Negative Numbers', function() {
  var filter_Negative;
  var numbers = _.range(0, -10, -1); // range gives up 0 -9 into array of numbers
  var expected = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]; //0 to -10 by -1
  deepEqual(filter_Negative(numbers), expected, 'Testing the filter_negative function ' );
});