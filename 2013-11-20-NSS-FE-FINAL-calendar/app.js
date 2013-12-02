var express = require('express');
var mongoose = require('mongoose');

// model definitions
require('require-dir')('./models');

// define middleware
var middleware = require('./lib/middleware');

// route definitions
var home = require('./routes/home');
var users = require('./routes/users');
var entry = require('./routes/entry');
var contacts = require('./routes/contacts');
var projects = require('./routes/projects');
var financial = require('./routes/financial');
var general = require('./routes/general');

var app = express();
var RedisStore = require('connect-redis')(express);
mongoose.connect('mongodb://localhost/KeepUp');

// configure express
require('./config').initialize(app, RedisStore);

// routes
app.get('/contact', middleware.getContacts, contacts.index);
app.get('/project', middleware.getProjects, projects.index);
app.get('/financial', middleware.getFinancial, financial.index);
app.get('/general', middleware.getGeneral, general.index);

app.post('/users', users.create);
app.put('/login', users.login);
app.delete('/logout', users.logout);


app.get('/make-me-an-admin', users.makeMeAnAdmin);
app.get('/admin', middleware.isAdmin, users.admin);
app.delete('/users/:id', users.delete);
app.put('/users/:id', users.update);

app.get('/entry', entry.index);

app.get('/contact', contacts.index);
app.get('/contact/groups', contacts.newGroup);
app.post('/contact/groups', contacts.createGroup);
app.get('/contact/new', contacts.new);
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

app.get('/financial', financial.index);
app.get('/financial/new', financial.new);
app.post('/financial', financial.create);
app.delete('/financial/:id', financial.delete);
app.get('/financial/:id/edit', financial.edit);
app.put('/financial/:id', financial.update);

app.get('/general', general.index);
app.get('/general/new', general.new);
app.post('/general', general.create);
app.delete('/general/:id', general.delete);
app.get('/general/:id/edit', general.edit);
app.put('/general/:id', general.update);
// app.put('/general/:id', general.updateChecklist);



// start server & socket.io
var common = require('./sockets/common');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {log: true, 'log level': 2});
server.listen(app.get('port'));
io.of('/app').on('connection', common.connection);
