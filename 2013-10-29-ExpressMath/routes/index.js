
/*
 * GET home page.
 */
var math = require('../modules/math');

exports.index = function(req, res){ //exports. w/e the thing is you want to export

  res.render('index', { title: 'Express', square: math.square(3), area: math.area(3,4), volume: math.vol(3,3,3), subtract: math.subtract(10,5)});
};