$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('form#game').on('submit', submitGame);

}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function submitGame(e){
  var url = $(this).attr('action') + '?player=' + $('input[name="player"]').val() + '&size=' + $('input[name="size"]').val();
  sendGenericAjaxRequest(url, {}, 'post', null, e, function(data, status, jqXHR){
    console.log(data);
    buildGameBoard(data);
  });
}

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

function buildGameBoard(game){
  var gameSquares = game.size * game.size;
  $('#board').attr('data-game', game.id);
  // $('#board').append(gameSquares);
  for (var i=0; i<gameSquares; i++)
    {
      $square = $('<div>');
      $square.addClass('square');
      $square.attr('data-position', i);
      $square.css('width', (100 / game.size) + '%');
      $square.css('height', (100 / game.size) + '%');

      $('#board').append($square);
    }
}


// function buildGameBoard(game){
//   var gameSquares = game.boardSize * game.boardSize;
//   $('#board').attr('data-game', game._id);
//   for (var i=0; i<gameSquares;i++){
//     $square = $('<div>');
//     $square.addClass('square');
//     $square.attr('data-position', i);
//     $square.css('width', 100 / game.boardSize + '%');
//     $square.css('height', 100 / game.boardSize + '%');

//     if(i === game.start){
//       $square.text('Start').addClass('startSquare').addClass('currentPosition');
//     } else if(i === game.exit){
//       $square.text('Exit').addClass('endSquare');
//     }

//     $('#board').append($square);
//   }

//   determineAvailableMoves();
// }

// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //
// ------------------------------------------------------------------------- //

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