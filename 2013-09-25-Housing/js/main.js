function area (l, w)
{
  return l * w; //this ihas to be a certain order
}

const PRICE_PER_SQFT = 200;
const PRICE_PER_WINDOW = 250; //const remains same through out

var house = {};
house.number_of_rooms = parseInt(prompt("Number of rooms?"));
house.number_of_windows = 0;
house.area = 0;
var house.rooms = [];

for(var i = 0;i < house.number_of_rooms; i++)
{
  var room = {};
  room.name = prompt("Name of the room");
  room.windows = parseInt(prompt("Number of windows?"));
  house.number_of_windows += room.windows;
  room.length = parseInt(prompt("length?"));
  room.width = parseInt(prompt("Width?"));
  room.area = area(room.length, room.width); // area is a function
  house.area += room.area;
  house.rooms.push(room);
}

house.area_cost = house.area * PRICE_PER_SQFT;
house.windows_costs = house.number_of_windows * PRICE_PER_WINDOW;
house.total_cost = house.area_cost + house.window_cost; // no need for variable total_cost is a property





// var rooms = [];
// var windows = [];
// var windows_costs = [];
// var widths = [];
// var lengths = [];
// var pools = []
// var diameters = []
// var depths = []

// var room_initial = prompt("Do you want a house, if so type yes if not please exit:?");

// while(room_initial)
// {
// var room1 = {};
// var window1 = {};
// var width1 = {};
// var length1 = {};
// var pool1 = {};
// var diameter1 = {};
// var depth1 = {};

// room1.room_initial = parseInt(prompt("Type 1 to give detail to your room"));
// window1.window = parseInt(prompt("How many windows do you want in this room?"));
// width1.width = parseFloat(prompt("What is the width of your room?"));
// length1.l = parseFloat(prompt("What is the length of your room?"));
// pool1.pool = parseFloat(prompt("How many pools do you want?"));
// diameter1.diam = parseFloat(prompt("What is your pools diameter?"));
// depth1.depth = parseFloat(prompt("What is your pools depth?"));

// rooms.push(room1);
// windows.push(window1);
// widths.push(width1);
// lengths.push(length1);
// pools.push(pool1);
// diameters.push(diameter1);
// depths.push(depth1);

// room_initial = prompt("Do you want to continue to add rooms? If so type yes if not exit:?");
// }

// var rooms_total;
// var windows_total;
// var widths_total;
// var lengths_total;
// var pools_total;
// var diameters_total;
// var depths_total;
// var sum_rooms = 0;
// var sum_windows = 0;
// var sum_widths = 0;
// var sum_lengths = 0;
// var sum_pools = 0;
// var sum_diameters = 0;
// var sum_depths = 0;



//   for(var i = 0; i < rooms.length; i++)
//     sum_rooms += rooms[i].room_initial;
//   rooms_total = sum_rooms;

//   for(var i = 0; i < windows.length; i++)
//     sum_windows += windows[i].window;
//   windows_total = sum_windows;

//   var window_cost_total =  0;
//     if ( windows_total > 1)
//   window_cost_total = 250 * windows_total; //final window cost operation

//   for(var i = 0; i < widths.length; i++)
//     sum_widths += widths[i].width;
//   widths_total = sum_widths;

//   for(var i = 0; i < lengths.length; i++)
//     sum_lengths += lengths[i].l;
//   lengths_total = sum_lengths;

//    for(var i = 0; i < pools.length; i++)
//     sum_pools += pools[i].pool;
//   pools_total = sum_pools;

//      for(var i = 0; i < diameters.length; i++)
//     sum_diameters += diameters[i].diam;
//   diameters_total = sum_diameters;

//      for(var i = 0; i < depths.length; i++)
//     sum_depths += depths[i].depth;
//   depths_total = sum_depths;


// var final_sqft = widths_total * lengths_total;

//  var sqft_cost_total =  0;
//       if ( final_sqft > 1)
//   sqft_cost_total = 200 * final_sqft;  //final square ft cost

//    var house_final_cost = window_cost_total + sqft_cost_total + gallon_cost; //final house operation

//   function cuft_to_gallons(cubit_feet)
// {
//   return (7.48052) * cubit_feet;
// }

// function area_circle(radius)
// {
//   return Math.PI * radius * radius;
//   // return Math.PI * square(radius); this is a way to reuse the function square
// }

// function volume_cylinder(radius, depth)
// {
//   return area_circle(radius) * depth;
// }

// var gallons = cuft_to_gallons(volume_cylinder(diameters_total/2, depths_total));

// var gallon_cost = gallons * 25;

// document.write("The total rooms are: " + rooms_total);
// document.write("The total windows are: " + windows_total);
// document.write("The total widths are: " + widths_total);
// document.write("The total lengths are: " + lengths_total);
// document.write("The square foot is: " + final_sqft);
// document.write("This is your pools diamter's total " + diameters_total + " and your depth's total " + depths_total + "And the total gallons you have = " + gallons + "And the total cost of gallons = $" + gallon_cost + " and the number of pools you have is " + pools_total);
// document.write("The total $cost of the windows is: " + window_cost_total);
// document.write("The house total square foot is $" + sqft_cost_total);
// document.write("The over all total of the house total is $" + house_final_cost);
// console.log("The total rooms are: " + rooms_total);
// console.log("The total windows are: " + windows_total);
// console.log("The total widths are: " + widths_total);
// console.log("The total lengths are: " + lengths_total);
// console.log("The total square foot is: " + final_sqft);
// console.log("This is your pools diamter's total " + diameters_total + " and your depth's total " + depths_total + "And the total gallons you have = " + gallons + "And the total cost of gallons = $" + gallon_cost + " and the number of pools you have is " + pools_total);
// console.log("The total $cost of the windows is: $" + window_cost_total);
// console.log("The total cost square foot is: $" + sqft_cost_total);
// console.log("The over all total of the house total is $" + house_final_cost);