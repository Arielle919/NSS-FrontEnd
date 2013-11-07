$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('form#game').on('submit', submitGame);
  $('.card').on('click', clickCard);
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function submitGame(e){
  var url = $(this).attr('action') + '?player=' + $('input[name="player"]').val();
  sendGenericAjaxRequest(url, {}, 'post', null, e, function(data, status, jqXHR){
    htmlStartGame(data);
  });
}

function clickCard(){
  debugger;
  var guess = $(this).data('position');
  var gameId = $('#cards').data('game');
  var url = '/games/' + gameId;
  sendGenericAjaxRequest(url, {guess:guess}, 'post', 'put', null, function(data, status, jqXHR){
    console.log(data.player + ' results are ' + data.didWin);
  });
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function htmlStartGame(game){
  debugger;
  $('input[name="player"]').val('');
  $('#player').text(game.player);
  $('#cards').attr('data-game', game._id);
  $('#cards').show();
  // each card in [0, 1, 2]
  // .card(data-position=card)
  //var div = '<div class="card"></div>';
  //var $div = $(div);
  // $div.attr('data-position', data-position);

  var numberOfBoxes = $('#amount').val();
   numberOfBoxes = parseInt(numberOfBoxes);
   for (var i =0; i < numberOfBoxes; i++)
   {
     var $div = $('<div>');
     $div.addClass('card');
     $div.attr('data-position', game.actual);
     $div.text(i);

     $('#cards').append($div);
   }


}

function sendGenericAjaxRequest(url, data, verb, altVerb, event, successFn){
  var options = {};
  options.url = url;
  options.type = verb;
  options.data = data;
  options.success = successFn;
  options.error = function(jqXHR, status, error){console.log(error);};

  if(altVerb) options.data._method = altVerb;
  $.ajax(options);
  if(event) event.preventDefault();
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //