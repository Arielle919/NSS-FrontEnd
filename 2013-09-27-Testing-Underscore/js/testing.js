'use strict';

test( "Filter Even Numbers", function() {
  var numbers = _.range(10); // range gives up 0 -9 into array of numbers
  var expected = [0, 2, 4, 6, 8]; //0 to 10 by 2
  deepEqual(filter_evens(numbers), expected, "Testing the filter_evens function " ); // filter evens is a fucntion to use
});

test( "Filter Odd Numbers", function() {
  var numbers = _.range(10); // range gives up 0 -9 into array of numbers
  var expected = [1, 3, 5, 7, 9];
  deepEqual(filter_odds(numbers), expected, "Testing the filter_odds function " ); // filter odds is a fucntion to use
});

test( "Filter Short Strings", function() {
  var strings = ["hello", "there", "a", "the", "cat", "elephant"];
  var expected = ["a", "the", "cat"];
  deepEqual(filter_short_strings(strings), expected, "Testing short strings under 4 characters " ); // filter evens is a fucntion to use
});

test( "Filter 'A' Strings", function() {
  var strings = ["apple", "Ape", "there", "a", "the", "cat", "elephant"];
  var expected = ["apple", "Ape", "a"]; //must be in correct order
  deepEqual(filter_a_strings(strings), expected, "Strings should begin with letter A" );
});

test( "find_string", function() {//you must match find_string title with function
  var strings = ["apple", "Ape", "there", "a", "the", "cat", "elephant"];
  deepEqual(find_string(strings, "elephant"), "elephant", "Find elephant" );
  deepEqual(find_string(strings, "a"), "a", "Find a" );
  deepEqual(find_string(strings, "Ape"), "Ape", "Find Ape" );
});

test( "find a string ending in a particular Letter", function() {//you must match find_string title with function
  var strings = ["dog", "cats", "lion", "tigers"];
  deepEqual(find_string_ending_letter(strings, "s"), "cats", "Find word that ends in s" );
  deepEqual(find_string_ending_letter(strings, "z"), undefined, "should not work" );

});

test( "Filter Negative Numbers", function() {
  var numbers = _.range(0, -10, -1); // range gives up 0 -9 into array of numbers
  var expected = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]; //0 to 10 by 2
  deepEqual(filter_negative(numbers), expected, "Testing the filter_negative function " ); // filter evens is a fucntion to use
});