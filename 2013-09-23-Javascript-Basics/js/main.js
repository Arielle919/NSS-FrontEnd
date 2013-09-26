/*askk user for their
first name*/

var first_name = prompt('What is your first name?');
var last_name = prompt('What is your last name?');
var gender = prompt("what is your gender");
var age = prompt("what is your age");

age = parseInt(age); //this converts age from string to number

var bday_month = prompt("what month were you born in?");
var current_month = prompt("what month is it right now?");
var full_name = first_name + ' ' + last_name;

/*when u want the system to stop and investigate the system use this code*/

//debugger;

var test1 = prompt('Score for test 1?');
test1 = parseFloat(test1); /*changes string into numbers*/
var test2 = prompt('Score for test 2?');
test1 = parseFloat(test2);
var test3 = prompt('Score for test 3?');
test1 = parseFloat(test3);

var sum =0;
sum += test1;
sum += test2;
sum += test3;

var average = sum / 3;

if(average < 70)
  console.log('failed');
else if((average >= 70) && (average < 80))
  console.log('you made a D');
else if ((average >=80) && (average <90))
  console.log('you made a B');
else
  console.log('you made a A');


console.log("Your full name is  : " + full_name);
console.log("The average of your test scores is  : " + average);

var null_variable = null, undefined_variable;

if((first_name == "arielle") && (last_name == "adams")) /*must use (())*/
  console.log('hey, i recognize you!');  /*when you have 1 line of code
you don't need brackets {}*/

if((gender == 'female') && (age >= 21))
  console.log('free drinks girlll');
else if ((gender == 'male') && (age >= 21))
  console.log('you gotta buy the lady a drink');
  else
    console.log('you are not old enough to drink and you are not a human');

//Turinary operator if the current month is = to bday month then true : else false
var can_have_cake = (current_month == bday_month) ? true :false;
var cake = (current_month == bday_month) ? "chocolate" : "vanilla _yulk";
console.log("Marie antionette says that you are eatting " + cake);

switch(bday_month)
{
  case 'january':
    console.log('you are an aquarius');
    break;
  case 'february':
    console.log('you are a pieses');
    break;
  default: //the default is optional
    console.log('you have no zodiac!');
}

//var can_have_cake = (current_month == bday_month); <--this is easier

// alert('this is a pop up OMG'); /*pop up code*/

// prompt('what is your name'); /*promps user provides text and under a text box*/

