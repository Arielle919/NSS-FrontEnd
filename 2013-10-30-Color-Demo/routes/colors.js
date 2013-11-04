
/*
 * GET /colors
 */

exports.index = function(req, res){
  var colors = ['blue', 'green', 'orange', 'pink', 'purple'];
  res.render('colors/index', {title: 'Colors', colors: colors});
};
