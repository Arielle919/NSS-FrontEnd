
/*
 * GET rgb page.
 */

exports.index = function(req, res){
   res.render('rgb/index', {title: 'RGB Page'});
};