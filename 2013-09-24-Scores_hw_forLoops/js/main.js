//this is what teacher did
var scores = [];
var sum = 0;
var avg = 0;

// debugger;

for(var i = 0; i < 10; i++)
{
  var score = prompt("Test Score");
  score = parseFloat(score);
  scores.push(score); //always push somthing singular into somthing plural
  sum += score;
}

avg = sum / scores.length;
var sum_of_squares = 0;

for(i = 0; i < 10; i++)
{ //u don;t need { for 1 statement
  sum_of_squares += Math.pow(scores[i] - avg, 2); //this means a particular score - avg to 2nd power
}

var standard_deviation = Math.sqrt(sum_of_squares / scores.length)
{
  console.log("This is the standard deviation: " + standard_deviation);
  document.write("  This is the standard deviation: " + standard_deviation);
}


// var scores = [80, 90, 95, 94, 100, 44, 67, 99, 101, 78]; // these are my scores

// scores = parseFloat(scores); // just in case I create float to change number

// var sum = 0;//had to create var for sum to add it to scores below / 10

// var mean = scores + sum / 10;
// {
//   console.log("This is the mean: " + mean);
//   document.write("This is the mean: " + mean);
// }

// var sum_b = (80 - mean) //initiate variable sum_b ..remember the mean is from above
// var val1 = sum_b * sum_b //the vals are the answers
// var sum_c = (90 - mean)
// var val2 = sum_c * sum_c
// var sum_d = (95 - mean)
// var val3 = sum_d * sum_d
// var sum_e = (94 - mean)
// var val4 = sum_e * sum_e
// var sum_f = (100 - mean)
// var val5 = sum_f * sum_f
// var sum_g = (44 - mean)
// var val6 = sum_g * sum_g
// var sum_h = (67 - mean)
// var val7 = sum_h * sum_h
// var sum_i = (99 - mean)
// var val8 = sum_i * sum_i
// var sum_j = (101 - mean)
// var val9 = sum_j * sum_j
// var sum_k = (78 - mean)
// var val10 = sum_k * sum_k

// //math.sqrt is a function for findind square root
// var stand = Math.sqrt(val1 + val2 + val2 + val2 + val3 + val3 + val4 + val5 + val6 + val7 + val8 + val9 + val10 / 10)
// {
//   console.log("This is the standard deviation: " + stand);
//   document.write("  This is the standard deviation: " + stand);
// }

