/*
 * GET entry page.
 */

exports.index = function(req, res){
  console.log('entry.index');
  res.render('entry/index', {title: 'KEEP UP: Entry', user: res.locals.user, todos: res.locals.todos});
};

