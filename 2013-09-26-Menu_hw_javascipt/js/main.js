var menu = {};
menu.sections = {};
menu.total_calories = 0:
menu.number_of_sections = parseInt(prompt("How many sections do you want?"));//initiallizing the Number for loop below


for (var i= 0; i < menu.number_of_sections; i++)
{
  var section_name = prompt("Name of section?");
  menu.sections[section_name] = [];// makes letter array for each section
}


// debugger;

var response = prompt("Menu Section or Blank to Exit?");
while(response);
{
  var item = {};
  item.name = prompt("This is the name of the food item.");
  item.calories = parseInt(prompt("Calories?"));
  item.cost = parseFloat(prompt("Cost?"));
  item.ingredients = prompt("ingredients?").split(", "); // turn an array into string
  menu.sections[response].push(item);// making a string for response

  response = prompt("Menu Section or Blank to Exit?") // to exit loop
}

var section_list = Object.getOwnPropertyNames(menu.sections); //turns object into array

for(i = 0; i < section_list.length; i++)
{
  for (var j = 0; j < menu.sections[section_list[i].length; j++)//going through each section
  {
    menu.total_calories += menu.sections[section_list[i]][j].calories;
  }
}

// var sections = [];
// var items = [];
// var details = [];
// var cals = [];
// var costs = [];

// var menu = prompt("Do you want to build a restaurant menu? If so type yes if not click cancel.");

// while (menu)
// {
//  var course = {};
//  var name = {};
//  var ingredient = {};
//  var calorie = {};
//  var money = {};

//   course.section = prompt("Name the course meal you want to target.");
//   name.item = prompt("Create the food's name");
//   ingredient.detail = prompt("Name the ingredients.");
//   calorie.cal = parseFloat(prompt("What is the total amount of calories for this item?"));
//   money.cost = parseFloat(prompt("What is the total cost of this meal item?"));
//  menu = prompt("Do you want to create another course? If yes type continue if no, please exit:")

//   sections.push(course);
//   items.push(name);
//   details.push(ingredient);
//   cals.push(calorie);
//   costs.push(money);
// }

// var total_cal;
// var sum_cal=0;


// for (var i = 0; i < cals.length; i++)
// sum_cal += cals[i].calorie;
// total_cal = sum_cal;


//   // for(var i = 0; i < rooms.length; i++)
//   //   sum_rooms += rooms[i].room_initial;
//   // rooms_total = sum_rooms;

// console.log("This is the number of menu sections " + sections.length);
// console.log("These are the section courses " );
// console.log("This is the number of items in menu ";
// console.log("This is the food list in the: ");
// console.log("These are the ingredients for the ") ;
// console.log("calorie count for ");
// console.log("This is the total cost for ");


