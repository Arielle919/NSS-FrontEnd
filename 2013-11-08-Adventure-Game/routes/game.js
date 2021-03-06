var mongoose = require('mongoose');
var Game = mongoose.model('Game');
var colors = require('colors');
var _ = require('lodash');
// Colors
// bold, italic, underline, inverse, yellow, cyan,
// white, magenta, green, red, grey, blue, rainbow,
// zebra, random

/*
 * GET /games
 */

exports.index = function(req, res){
  console.log('games.index'.italic.underline.bold.magenta);
  res.render('games/index', {title: 'Adventure Game'});
};

/*
 * POST /games/start
 */

exports.start = function(req, res){
  console.log('game.start'.italic.underline.bold.magenta);
  new Game(req.query).save(function(err, game){
    res.send(game);
  });
};

/*
 * POST /games/:id
 */

exports.update = function(req, res){
  Game.findById(req.params.id, function(err, game){
    game.currentPosition = req.body.newPosition;
    game.save(function(err, updatedGame){
      res.send(updatedGame);
    })
  });
}
