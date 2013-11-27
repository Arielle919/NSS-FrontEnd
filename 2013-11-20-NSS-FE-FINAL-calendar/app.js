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
var entry = require('./routes/entry');
var contacts = require('./routes/contacts');
var projects = require('./routes/projects');

var app = express();
var RedisStore = require('connect-redis')(express);
mongoose.connect('mongodb://localhost/KeepUp');

// configure express
require('./config').initialize(app, RedisStore);

// routes
app.get('/', middleware.getTodos, home.index);
app.get('/entry', middleware.getContacts, entry.index);
app.get('/project', middleware.getProjects, projects.index);

app.post('/users', users.create);
app.put('/login', users.login);
app.delete('/logout', users.logout);


app.get('/make-me-an-admin', users.makeMeAnAdmin);
app.get('/admin', middleware.isAdmin, users.admin);
app.delete('/users/:id', users.delete);
app.put('/users/:id', users.update);

app.get('/entry', entry.index);

app.get('/contact', contacts.index);
app.post('/contact', contacts.create);
app.get('/contact/:id', contacts.show);
app.delete('/contact/:id', contacts.delete);
app.get('/contact/:id/edit', contacts.edit);
app.put('/contact/:id', contacts.update);

app.get('/project', projects.index);
app.get('/project/new', projects.new);
app.post('/project', projects.create);
app.delete('/project/:id', projects.delete);
app.get('/project/:id/edit', projects.edit);
app.put('/project/:id', projects.update);





app.post('/todos', todos.create);
app.put('/todos/:id', todos.update);


// start server & socket.io
var common = require('./sockets/common');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {log: true, 'log level': 2});
server.listen(app.get('port'));
io.of('/app').on('connection', common.connection);
