var mongoose = require('mongoose');
var _ = require('lodash');

var Game = mongoose.Schema({
  board: [{}],
  player: String,
  size: Number,
  start: Number,
  exit: Number,
  currentPosition: Number,
  createdAt: {type: Date, default: Date.now}
});

Game.pre('save', function(next){
  if(!this.board.length){
    var gameSquares = this.size * this.size;
    this.board = _.range(gameSquares);

    var startPosition = _.random(0, gameSquares);
    var exitPosition;
    while(!exitPosition) {
      var temp = _.random(0,gameSquares);
      temp != startPosition ? exitPosition = temp : exitPosition = null;
    }

    this.start = startPosition;
    this.currentPosition = startPosition;
    this.exit = exitPosition;
  }

  next();
});


mongoose.model('Game', Game);