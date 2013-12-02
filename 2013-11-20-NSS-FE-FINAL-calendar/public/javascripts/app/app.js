/* global document, sendAjaxRequest, getValue, window, io */

$(document).ready(initialize);

var socket;

function initialize(){
  $(document).foundation();
  initializeSocketIO();
  $('#authentication-button').on('click', clickAuthenticationButton);
  $('#register').on('click', clickRegister);
  $('#login').on('click', clickLogin);
  $('#show-contactForm').on('click', showForm);
  // $('form#appointment').on('submit', submitAppointment);
  $('#users input[type="checkbox"]').on('click', clickChangeAdmin);
  $('form#todo').on('submit', submitTodo);
  $('#generals').on('click', 'input[type="checkbox"]', clickChangeIsComplete);
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function showForm()
{
  $('#contact').removeClass('hidden');
}

function clickRegister(e){
  var url = '/users';
  var data = $('form#authentication').serialize();
  sendAjaxRequest(url, data, 'post', null, e, function(data){
    htmlRegisterComplete(data);
  });
}

function clickLogin(e){
  var url = '/login';
  var data = $('form#authentication').serialize();
  sendAjaxRequest(url, data, 'post', 'put', e, function(data){
    htmlUpdateLoginStatus(data);
  });
}

function clickAuthenticationButton(e){
  var isAnonymous = $('#authentication-button[data-email="anonymous"]').length === 1;

  if(isAnonymous){
    $('form#authentication').toggleClass('hidden');
    $('input[name="email"]').focus();
  } else {
    var url = '/logout';
    sendAjaxRequest(url, {}, 'post', 'delete', null, function(data){
      htmlLogout(data);
    });
  }

  e.preventDefault();
}


function clickChangeAdmin(){
  var url = $(this).parent().next().find('form').attr('action');
  sendAjaxRequest(url, {}, 'post', 'put', null, function(data){
    console.log(data);
  });
}

// function submitAppointment(e)
// {
//   debugger;
//   var url = $(this).attr('action');
//   var data = $(this).serialize();
//   sendAjaxRequest(url, data, 'post', null, e, function(data){
//     htmlAddAppointment(data);
//   });
// }

function submitTodo(e){
  var url = $(this).attr('action');
  var data = $(this).serialize();
  sendAjaxRequest(url, data, 'post', null, e, function(data){
    htmlAddTodo(data);
  });
}

function clickChangeIsComplete(){
  var id = $(this).parent().data('id');
  var url = '/general/' + id;
  var box = $(this).parent().children();
  sendAjaxRequest(url, {}, 'post', 'put', null, function(data){
    htmlChecked(box);
  });
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function htmlRegisterComplete(result){
  $('input[name="email"]').val('');
  $('input[name="password"]').val('');
  $('#loginRule').removeClass('hidden');
  if(result.status === 'ok'){
    $('form#authentication').toggleClass('hidden');
  }
}

function htmlUpdateLoginStatus(result){
  $('input[name="email"]').val('');
  $('input[name="password"]').val('');

  if(result.status === 'ok'){
    $('form#authentication').toggleClass('hidden');
    $('#authentication-button').attr('data-email', result.email);
    $('#authentication-button').text(result.email);
    $('#authentication-button').addClass('alert');
    $('#the-application').removeClass('hidden');

    window.location.href = '/';
  }
}

function htmlLogout(data){
  $('#authentication-button').attr('data-email', 'anonymous');
  $('#authentication-button').text('Login | Sign Up');
  $('#authentication-button').removeClass('alert');
  $('#the-application').addClass('hidden');
  window.location.href = '/';
}

function htmlAddTodo(todo){
  var tr = '<tr data-id="' + todo._id + '"><td><input type="checkbox"></td><td>' + todo.title + '</td><td>' + todo.category + '</td><td>' + todo.dueDate + '</td></tr>';
  $('table#todos').append(tr);
}

function htmlChecked(box)
{
debugger;
  // var $box = id.parent().parent();
  var $box = box;
  $box.addClass('finish');
}

// function htmlAddAppointment(appointment)
// {
//   var div = '<div data-id="' + appointment._id + '"><p class="title">' + appointment.title + '</p><p class="date">' + appointment.date + '</p><p class="content">' + appointment.content + '</p></div>';
//   $('#appointments').append(div);
// }

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function initializeSocketIO(){
  var port = window.location.port ? window.location.port : '80';
  var url = window.location.protocol + '//' + window.location.hostname + ':' + port + '/app';

  socket = io.connect(url);
  socket.on('connected', socketConnected);
}

function socketConnected(data){
  console.log(data);
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
