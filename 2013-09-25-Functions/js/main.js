function square(x)
{
  return x * x; //this is a easier way
   // var sq = x * x;
  // return sq;
}

function cube(x) //this x is only inside of this function
{
// return Math.pow(x, 3); this is a way
  return square(x) * x; // this is another way
}

function area_rect(width, height)
{
  return width * height;
}

function area_square(side)
{
  return sqaure(side);
}

function area_triangle(width, height)
{
  // return (width * height) /2; this is a way
  return area_rect(width, height) / 2;// this is a way to reuse function above
}

function area_circle(radius)
{
  return Math.PI * radius * radius;
  // return Math.PI * square(radius); this is a way to reuse the function square
}

function cuft_to_gallons(cubit_feet)
{
  return (7.48052) * cubit_feet;
}

function volume_cylinder(radius, depth)
{
  return area_circle(radius) * depth;
}
// var area_circle(diameter / 2) * depth; this is a way for above
var diameter = 30;
var depth = 9;
var gallons = cuft_to_gallons(volume_cylinder(diameter/2, depth));
console.log('You have ' + gallons + ' gallons of water in your pool');