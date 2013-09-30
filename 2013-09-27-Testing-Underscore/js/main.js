function filter_evens(numbers)
{
 return _.filter(numbers, function(num) {return (num % 2) ==0;});

}

function filter_odds(numbers)
{
 return _.filter(numbers, function(num) {return (num % 2) ==1;});

}

function filter_short_strings(strings)
{
 return _.filter(strings, function(string){return string.length < 4;});
}

function filter_a_strings(strings)
{
 return _.filter(strings, function(string){return string[0].toLowerCase() == 'a';});
}

function find_string(strings, word)
{
 var x = _.find(strings, function(string){return string == word;});
 return x; // the var x is just another way to do the result
}

function find_string_ending_letter(strings, letter)
{
 var x = _.find(strings, function(string){return string[string.length - 1] == letter;});
 return x;
}