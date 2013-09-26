var colors = [];



// var response = prompt('Enter a color or quit:');//ask user question
// while(response != 'quit') //!= does not equal
// {
//   colors.push(response); //whatever color answer user puts gets pushed into array
//   response = prompt('Enter a color or quit:');
// }

var response = prompt('Enter a color or quit:');//ask user question
while(response) //if user soesn'y put anything..it means quit as well
{
  colors.push(response); //whatever color answer user puts gets pushed into array
  response = prompt('Enter a color:');
}

for(var count = 0; count < colors.length; count++)
{
  console.log("You typed in color: " + colors[count])
}

// debugger;
var sum = 0;

//below loop is 3 -1 so 2 > -1 true so go down 1 so loop is 1 sooo 1 is the loop in line 30 :)
for (var loop = colors.length -1; loop > -1; loop--) //does the loop backwards
{
  sum += colors[loop].length;
  // console.log("You typed in color: " + colors[loop])
}
var avg = sum / colors.length;
