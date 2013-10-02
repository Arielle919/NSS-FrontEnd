$('h2').after('<p>p tag created after the h2</p>');

$('h1').before('<p>this is a p tag before the header h1</p>');
$('footer > p').append('<span> This is a span in the paragraph of the footer APPEND function to place something inside of another tag</span>')
$('footer > p').append('<h2> this h2 was APPENED INTO THE footer p tag so APPEND = LAST</h2>'); //append puts the element at the end of the list
$('footer > p').prepend('<h3>THis h3 was put into the footer p but before all the children</h3>');//prepend puts the tag before the children
$('footer').empty(); //the .empty(); function removes the tag "the entrie tag"
var $orphan = $('section > h2'); //define the var here
$orphan.detach();//here you are detaching the orphan or h2 and reattaching it below
$('header > h1').after($orphan);
$orphan.detach(); // now orphan is detached again from header :)
$('header > h1').before($orphan);
//.remove() permently removes but detached is temporary
var $myPTag = $('<p>');
$myPTag.addClass('awesome');
$myPTag.addClass('cool');
$myPTag.attr('class');  // in fire bug tells you all the classes
