var first_name = prompt('What is your First Name?');

var last_name = prompt('What is your Last Name?');

var initial_balance = prompt('What is your initial check book balance');

var deposit1 = prompt("How much do you want to deposit the 1st time?");

var deposit2 = prompt("How much do you want to deposit a 2nd time?")

var deposit3 = prompt("How much do you want to deposit a 3rd time?");

var withdraw1 = prompt("How much do you want to withdraw a 1st time?");

var withdraw2 = prompt("How much do you want to withdraw a 2nd time?");

var withdraw3 = prompt("How much do you want to withdraw a third time?");

 // debugger;

initial_balance = parseFloat(initial_balance);//changes  string to #
deposit1 = parseFloat(deposit1); //changing  string to #'s'
deposit2 = parseFloat(deposit2);
deposit3 = parseFloat(deposit3);
withdraw1 = parseFloat(withdraw1);
withdraw2 = parseFloat(withdraw2);
withdraw3 = parseFloat(withdraw3);


var final_balance = (initial_balance + deposit1 + deposit2 + deposit3 - withdraw1 - withdraw2 - withdraw3);
if (final_balance < 0)
  final_balance -= 50;
console.log("Hello, " +first_name + " " + last_name, "Your final balance is " + final_balance);

// var deposits = 0;  1st he set up the sum  of dep here this is the way the teacher did it.
// deposits += deposit1; deposit is = dep + 1st deposit
// deposits += deposit2;
// deposits += deposit3;

// var withdraws = 0; same here
// withdraws +- withdraw1;
// withdraws +- withdraw2;
// withdraws +- withdraw3;

// balance += (deposits - withdraws);
// balance -= (balance < 0) ? 50 : 0;

// console.log("YOur balance is: ' + balance");




