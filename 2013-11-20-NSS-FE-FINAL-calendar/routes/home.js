exports.index = function(req, res){
  console.log('home.index');
  res.render('home/index', {title: 'KEEP UP', user: res.locals.user, todos: res.locals.todos});
};
