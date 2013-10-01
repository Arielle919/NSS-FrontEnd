test( "pig_latin", function() {
  deepEqual(pig_latin("hello"), "elloha", "pig latin conversion" );
});

test( "array_sentence", function() {
  var sentence = "four, score, and, seven, years, ago";
  var expected = "goaa; earsya; evensa; ndaa; coresa; ourfa";
  deepEqual(array_sentence(sentence), expected, "array conversion, to pig latin, then reverse");
});


