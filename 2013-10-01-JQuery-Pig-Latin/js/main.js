$(document).ready(initialize)

function pig_latin(pig_word)
{
return pig_word.slice(1) + pig_word[0] + "a" ;
}

function initialize()
{
$('#pig_button').click(give_ans);
}

function give_ans()
{
var pig_text = $('#pig_text').val();
var result_pig = pig_latin(pig_text);
$('#result_pig').val(result_pig);
}


