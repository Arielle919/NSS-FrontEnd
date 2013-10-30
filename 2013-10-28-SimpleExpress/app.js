
/**
 * Module dependencies.
 */

var express = require('express');//line6-10 pulls in files or codes someone else wrote

//Our Defined Route Modules
var home = require('./routes/home');
var cats = require('./routes/cats');
var dogs = require('./routes/dogs');

var http = require('http');
var path = require('path');

var app = express(); //starts express

// all environments
app.set('port', process.env.PORT || 3000); //sets some stuff up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');//using jade htm
app.use(express.favicon());//favicon they have
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', home.index);//just type the domain name NOT/Home
app.get('/cats', cats.index);
app.get('/dogs', dogs.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
