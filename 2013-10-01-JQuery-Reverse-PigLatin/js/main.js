$(document).ready(initialize)

function initialize()
{
$('#convert_btn').click(output);

}

function pig_latin(pig_word)
{
return pig_word.slice(1) + pig_word[0] + "a" ;
}


function array_sentence(sentence)
{
  var words = sentence.split(", ").reverse();
  var pig_words = [];
  for ( var i=0; i < words.length; i++)
  {
    pig_words.push(pig_latin(words[i]));
  }
  return pig_words.join("; ");
}
//the way teacher did it
 // var words = sentence.split(", ")//.reverse();
 //  var reversed_words = words.reverse();
 //  for(var i - 0; i < reversed_words.length; i++)
 //    reversed_words[i] = pig_latin(reversed_words[i]);
 //  var new_sentence = reversed_words.join('; ');
 //  return new_sentence;

function output()
{
  var type_box = $('#type_box').val();
  var result = array_sentence(type_box);
  $('#conversion').val(result);
}


// // ['a', 'b', 'c'].reverse()
// // "abc".split('').reverse().join(''); //string, to array, reverse, then string again

