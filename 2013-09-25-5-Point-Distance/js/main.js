var points = [];

for (var i =0; i < 2; i++) //this is initial loop 2 is how many times you want it to look then i add
{
  var point = {}; //object his points property = x and y
  point.x = parseFloat(prompt('X Coordinate?'));
  point.y = parseFloat(prompt('Y Coordinate?'));
  points.push(point); //push point into points array
}

var sideA = points[0].y -points[1].y; //the array and the object above numbered by array
var sideB = points[0].x -points[1].x;

var distance = Math.sqrt(sideA*sideA + sideB*sideB);
console.log("This is the distance " + distance);
document.write("This is the distance " + distance);


