var rooms = [];
var windows = [];
var windows_costs = [];
var widths = [];
var lengths = [];

var room_initial = prompt("Do you want a house, if so type yes if not please exit:?");

while(room_initial)
{
var room1 = {};
var window1 = {};
var width1 = {};
var length1 = {};

room1.room_initial = parseInt(prompt("Type 1 to give detail to your room"));
window1.window = parseInt(prompt("How many windows do you want in this room?"));
width1.width = parseFloat(prompt("What is the width of your room?"));
length1.length = parseFloat(prompt("What is the length of your room?"));

rooms.push(room1);
windows.push(window1);
widths.push(width1);
lengths.push(length1);

room_initial = prompt("Do you want to continue to add rooms? If so type yes if not exit:?");
}

var rooms_total;
var windows_total;
var widths_total;
var lengths_total;
var sum_rooms = 0;
var sum_windows = 0;
var sum_widths = 0;
var sum_lengths = 0;



  for(var i = 0; i < rooms.length; i++)
    sum_rooms += rooms[i].room_initial;
  rooms_total = sum_rooms;

  for(var i = 0; i < windows.length; i++)
    sum_windows += windows[i].window;
  windows_total = sum_windows;

  var window_cost_total =  0;
    if ( windows_total > 1)
  window_cost_total = 250 * windows_total; //final window cost operation

  for(var i = 0; i < widths.length; i++)
    sum_widths += widths[i].width;
  widths_total = sum_widths;

  for(var i = 0; i < lengths.length; i++)
    sum_lengths += lengths[i].length;
  lengths_total = sum_lengths;

var final_sqft = widths_total * lengths_total;

 var sqft_cost_total =  0;
      if ( final_sqft > 1)
  sqft_cost_total = 200 * final_sqft;  //final square ft cost

   var house_final_cost = window_cost_total + sqft_cost_total; //final house operation
//   function cuft_to_gallons(cubit_feet)
// {
//   return (7.48052) * cubit_feet;
// }

// function volume_cylinder(radius, depth)
// {
//   return area_circle(radius) * depth;
// }
// // var area_circle(diameter / 2) * depth; this is a way for above
// var diameter = 30;
// var depth = 9;
// var gallons = cuft_to_gallons(volume_cylinder(diameter/2, depth));
// console.log('You have ' + gallons + ' gallons of water in your pool');

document.write("The total rooms are: " + rooms_total);
document.write("The total windows are: " + windows_total);
document.write("The total widths are: " + widths_total);
document.write("The total lengths are: " + lengths_total);
document.write("The square foot is: " + final_sqft);
document.write("The total $cost of the windows is: " + window_cost_total);
document.write("The house total square foot is $" + sqft_cost_total);
document.write("The over all total of the house total is $" + house_final_cost);
console.log("The total rooms are: " + rooms_total);
console.log("The total windows are: " + windows_total);
console.log("The total widths are: " + widths_total);
console.log("The total lengths are: " + lengths_total);
console.log("The square foot is: " + final_sqft);
console.log("The total $cost of the windows is: " + window_cost_total);
console.log("The square foot is: $" + sqft_cost_total);
console.log("The over all total of the house total is $" + house_final_cost);



// var dogs = [];
// var name = prompt("Enter a dog's name or blank to exit:?");

// while(name)
// {
//   var dog = {};
//   dog.name = name;
//   dog.age = parseInt(prompt('Age ?')); //read from inside outside
//   dog.breed = prompt("Breed ?");
//   dogs.push(dog); //push dog properties in array of dogs
//   name = prompt("What is the dog's name");
// }

// // debugger;

// var avg_age;
// var sum_age = 0;

// for(var i = 0; i < dogs.length; i++)  //i ++ is what counts through the array
//   sum_age += dogs[i].age; // this is an array...[i] is dog then age

// avg_age = sum_age / dogs.length;
// console.log('You have ' + dogs.length + ' dogs, the avg age is ' + Math.ceil(avg_age));
// document.write('You have ' + dogs.length + ' dogs, the avg age is ' + Math.ceil(avg_age));
