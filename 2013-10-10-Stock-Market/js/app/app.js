'use strict';
//Firebase Schema
var Δdb;
var ΔcashBalance;
var Δcash;
// var Δstocks;
//Local Schema
var db = {};
// db.stocks = {};
db.cash = [];
db.cashBalance = {};
var cashBalance = 0;
db.statistics = {};
db.statistics.stocktotal = 0;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#addFunds').click(addFunds);
  $('#buy').click(purchase);

  Δdb = new Firebase('https://stockmarket-aa.firebaseio.com/');
  // getStockQuote();

  ΔcashBalance = Δdb.child('items');
  // Δstocks = Δdb.child('stocks');
  Δcash = Δdb.child('cash');

  ΔcashBalance.on('value', balanceChanged);/*1 time when started dump data
  into recieved data...when the value changes on your
   database call
   this function*/
  // Δstocks.on('child_added', stockAdded);
  Δcash.on('child_added', cashAdded);

  $('#setInterval').click();
}

function getStockQuote(symbol, fn)
{
  var data = {symbol: symbol};
  // data.price = 'AAPL';
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);//receivedQuote
}

function receivedQuote(data, textStatus, jqXHR)
{
  console.log(data);
  console.log(textStatus);
  console.log(jqXHR);
}

function addFunds()
{
  var cashBalance = $('#funds').val();
  cashBalance = parseInt(cashBalance, 10);
  var balance = {};
  balance.cash = cashBalance;
  db.cashBalance = balance;
  $('#account').text('Your Account has: $' + cashBalance + '.00');

  ΔcashBalance.update(balance);

}


function purchase(){
  var symbol = $('#symbol').val();
  var quantity = $('#quantity').val();
  quantity = parseInt(quantity, 10);
  // balance = {};
  // balance.cashBalance = cashBalance;

  getStockQuote(symbol, function(data, textStatus, jqXHR){
    var quote = data.Data;
    if(quote.LastPrice * quantity <= db.cashBalance.cash){

      db.cashBalance.cash -= quote.LastPrice * quantity;

      // db.cashBalance.stock += quote.LastPrice * quantity;
      // db.cashBalance.total = db.cashBalance.cash + db.cashBalance.stock;
      ΔcashBalance.set(db.cashBalance);

      // var stock = {};
      // stock.symbol = symbol;
      // stock.purchasePrice = quote.LastPrice;
      // stock.quantity = quantity;
      // Δstocks.push(stock);

      var cash = {};
      cash.symbol = symbol;
      cash.purchasePrice = quote.LastPrice;
      cash.quantity = quantity;
      Δcash.push(cash);

      $('#totals').text(db.cashBalance.cash);
    }

    $('#symbol').val('');
    $('#quantity').val('');
  });
}

// function updateTotal(stock)
//  {
//   var $stockTotal = $('#total');
//   db.statistics.total = stock.quantity * stock.cash;
//   $stockTotal.text('$'+ db.statistics.stocktotal +'.00');
// }

function balanceChanged(){

}

// function stockAdded(snapshot){
//   var stock = snapshot.val();
//   // createRow(stock);
//   updateTotal(stock);
//   db.stocks.push(stock);
// }

function cashAdded(snapshot){
  var cash = snapshot.val();
  db.cash.push(cash);
  createRow(snapshot);
  $('#totals').text(db.cashBalance.cash);
}

function createRow(item)
{
  var row = '<tr><td class="name"></td><td class="count"></td><td class="value"></td><td class="room"></td><td class="condition"></td><td class="date"></td></tr>';
  var $row = $(row);

  $row.children('.name').text(item.name);
  $row.children('.symbol').text(item.symbol);
  $row.children('.quote').text(item.quote);
  $row.children('.purchased').text(item.quantity);
  $row.children('.currentPrice').text(item.LastPrice);


  $('#table').append($row);
}

