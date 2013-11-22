/* global document, sendAjaxRequest, getValue, window, io */

$(document).ready(initialize);

var socket;

function initialize(){
  $(document).foundation();
  initializeSocketIO();
  $('#authentication-button').on('click', clickAuthenticationButton);
  $('#register').on('click', clickRegister);
  $('#login').on('click', clickLogin);
  $('#submit-calendar').on('click',createCalendar);
  $('#users input[type="checkbox"]').on('click', clickChangeAdmin);
  $('form#todo').on('submit', submitTodo);
  $('table#todos').on('click', 'input[type="checkbox"]', clickChangeIsComplete);
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

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

function createCalendar(){
  var numDays = getValue('input[name="days"]', parseInt);
  var year = getValue('input[name="year"]', parseInt);
  var monthType = $('#monthSelect').val();
  //var weekType = $('#weekdaySelect').val();


  // createCalendarObject(numDays, year, monthType, weekType, i);
  $('#month-title').text(monthType);
  $('#year-title').text(year);

  for(var i = 1; i <= numDays; i++){
    var div = '<div class="day-box"><p class="dayNum">' + i + '</p><p class="note"></p></div>';
    var $div = $(div);
      // $div.addClass('gahit');

    $('#inside-calendar').append($div);

  }
  // if(($('#monthSelect').val() 'January' === 'January')){
  //   gaSeats.push(i);


  //   }
  // } else if(($('#sectionSelect').val() === 'vip')){
  //   vipSeats.push(j);

  //   for(var j = 1; j <= numSeats; j++){
  //     var Vdiv = '<div class="seat"><p class="seatNum">' + seatType + '-' + j + '</p><p class="seatName">' + name + '</p><p class="seatPrice">' + price + '</p></div>';
  //     var $Vdiv = $(Vdiv);
  //     $Vdiv.addClass('viphit');

  //     $('#vip').append($Vdiv);

  //   }
  //   $('#seatCost').val('');
  // }
}

function clickChangeAdmin(){
  var url = $(this).parent().next().find('form').attr('action');
  sendAjaxRequest(url, {}, 'post', 'put', null, function(data){
    console.log(data);
  });
}


function submitTodo(e){
  var url = $(this).attr('action');
  var data = $(this).serialize();
  sendAjaxRequest(url, data, 'post', null, e, function(data){
    htmlAddTodo(data);
  });
}

function clickChangeIsComplete(){
  var id = $(this).parent().parent().data('id');
  var url = '/todos/' + id;
  sendAjaxRequest(url, {}, 'post', 'put', null, function(data){
    console.log(data);
  });
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function htmlRegisterComplete(result){
  $('input[name="email"]').val('');
  $('input[name="password"]').val('');

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
