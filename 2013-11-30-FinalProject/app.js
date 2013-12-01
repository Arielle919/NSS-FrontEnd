var express = require('express');
var mongoose = require('mongoose');

// model definitions
require('require-dir')('./models');

// define middleware
var middleware = require('./lib/middleware');

// route definitions
var home = require('./routes/home');
var users = require('./routes/users');
var todos = require('./routes/todos');
var projects = require('./routes/projects');

var app = express();
var RedisStore = require('connect-redis')(express);
mongoose.connect('mongodb://localhost/KEEP--UP');

// configure express
require('./config').initialize(app, RedisStore);

// routes
app.get('/', middleware.getTodos, home.index);
app.get('/projects', middleware.getProjects, projects.index);

app.post('/users', users.create);
app.put('/login', users.login);
app.delete('/logout', users.logout);
app.get('/make-me-an-admin', users.makeMeAnAdmin);
app.get('/admin', middleware.isAdmin, users.admin);
app.delete('/users/:id', users.delete);
app.put('/users/:id', users.update);
app.post('/todos', todos.create);
app.put('/todos/:id', todos.update);

app.get('/projects', projects.index);
app.get('/projects/new', projects.new);
app.post('/projects', projects.create);
app.post('/projects', projects.createTask);
app.put('/projects/:id', projects.updateTask);

// start server & socket.io
var common = require('./sockets/common');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {log: true, 'log level': 2});
server.listen(app.get('port'));
io.of('/app').on('connection', common.connection);
