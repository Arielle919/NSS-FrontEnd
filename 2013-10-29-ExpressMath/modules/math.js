exports.square = function(x)
{
  var sq =  x * x;
  return sq;
};

exports.area =  function(length, width)
{
  return length * width;
};

exports.vol = function(length,width,height)
{
   return length * width * height;
  // return this.area(length * width) * height; //reusing area function within a function
};

exports.subtract =  function(a,b)
{
  var sub = a - b;
  return sub;
};