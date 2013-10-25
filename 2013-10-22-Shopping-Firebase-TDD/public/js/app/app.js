'use strict';

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

// Firebase Schema
var Δdb;
var Δproducts;
var Δcustomers;
var Δorders;

// Local Schema (defined in keys.js)
db.products = [];
db.customers = [];
db.orders = [];
db.cart = {};
db.cart.products = [];
db.cart.totals = {};
db.pagination = {};
db.pagination.perPage = 5;
db.pagination.currentPage = 1;
db.pagination.currentRowCount = 0;

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  initializeDatabase();
  turnHandlersOn();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function initializeDatabase(){
  Δdb = new Firebase(db.keys.firebase);
  Δproducts = Δdb.child('products');
  Δcustomers = Δdb.child('customers');
  Δorders = Δdb.child('orders');

  Δproducts.on('child_added', dbProductAdded);
  Δcustomers.on('child_added', dbCustomerAdded);
  Δorders.on('child_added', dbOrderAdded);
}

function turnHandlersOn(){
  $('#add-product').on('click', clickAddProduct);
  $('#previous').on('click', clickNavigation);
  $('#next').on('click', clickNavigation);
  $('#add-customer').on('click', clickAddCustomer);
  $('#select-customer').on('change', CustomerChanged);
  $('.product').on('click','.product-image', ProductClicked);
}

function turnHandlersOff(){
  $('#add-product').off('click');
  $('#previous').off('click');
  $('#next').off('click');
  $('#add-customer').off('click', clickAddCustomer);
  $('#select-customer').off('change');
  $('.product').off('click','.product-image', ProductClicked);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clickAddProduct(){
  var image = getValue('#product-image');
  var name = getValue('#product-name');
  var weight = getValue('#product-weight', parseFloat);
  var price = getValue('#product-price', parseFloat);
  var off = getValue('#product-off', parseFloat) / 100;

  var product = new Product(image, name, weight, price, off);
  delete product.salePrice;
  Δproducts.push(product);
}

function clickNavigation(){
  db.pagination.currentRowCount = 0;
  htmlEmptyProductRows();

  var isPrevious = this.id === 'previous';
  db.pagination.currentPage += isPrevious ? -1 : +1; //if isP is true then -1 else -1

  var startIndex = db.pagination.perPage * (db.pagination.currentPage - 1); //2 * -1 = 1 + 5 = 5 is where we are
  var endLength = (startIndex + db.pagination.perPage) > db.products.length ? db.products.length : startIndex + db.pagination.perPage; // if passes 12 then  change end.length to products.length then my end length is what im starting from + 5
  var isLess = startIndex > 0; // is there previous stuff...if start Index is greater than 0
  var isMore = db.products.length > endLength; //is the length os the array greater than end length...or more than 12

  htmlShowHideNavigation('#previous', isLess); //if less is true shhow it
  htmlShowHideNavigation('#next', isMore);// if more is true show if false don't

  for(var i = startIndex; i < endLength; i++){
    htmlAddProduct(db.products[i]);
  }
}

function clickAddCustomer()
{
  var image = getValue('#customer-image');
  var name = getValue('#customer-name');
  var isDomestic = $('input[name="address"]:checked').val() === 'domestic';
  htmlResetRadioButtons();

  var customer = new Customer (image, name, isDomestic);

  Δcustomers.push(customer);
}

function CustomerChanged()
{
  var name = this.value;
  var customer = _.find(db.customers, function(c){return c.name === name;});

  db.cart.customer = customer;

}

function ProductClicked()
{
  var name = this.name;
  var product = name;
  db.cart.products = product;
}
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function dbProductAdded(snapshot){
  var obj = snapshot.val();
  var product = new Product(obj.image, obj.name, obj.weight, obj.price, obj.off);
  product.id = snapshot.name();
  db.products.push(product);
  if(db.pagination.currentRowCount < db.pagination.perPage){
    htmlAddProduct(product);
  } else {
    htmlShowHideNavigation('#next', true);
  }
}

function dbCustomerAdded(snapshot){
  var person = snapshot.val();
  var customer = new Customer(person.image, person.name, person.isDomestic);
  customer.id = snapshot.name();
  db.customers.push(customer);
  htmlAddCustomerToSelect(customer);
}

function dbOrderAdded(snapshot){
  var order = snapshot.val();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function htmlAddProduct(product){
  db.pagination.currentRowCount++;
  var tr = '<tr class="product"><td class="product-image"><img src="/img/' + product.image + '"></td><td class="product-name">' + product.name + '</td><td class="product-weight">' + product.weight + ' lbs</td><td class="product-price">' + formatCurrency(product.price) + '</td><td class="product-off">' + product.off + '</td><td class="product-sale">' + formatCurrency(product.salePrice()) + '</td></tr>';
  var $tr = $(tr);
  $('#products').append($tr);
}

function htmlShowHideNavigation(selector, shouldShow){
  $(selector).removeClass('hidden');

  if(!shouldShow){
    $(selector).addClass('hidden');
  }
}

function htmlEmptyProductRows(){
  $('.product').remove();
}

function htmlResetRadioButtons()
{
  // $('input[name="address"]').each(function(index, dom)//index 1, dom object
  // {
  //   dom.checked = false;
  // }); this works for the each method
  $('input[name="address"]:checked')[0].checked = false;
}

function htmlAddCustomerToSelect(customer)
{
  var $option = $('<option>');
  $option.val(customer.name);
  $option.text(customer.name);
  $('#select-customer').prepend($option);
}
// -------------------------------------------------------------------- //
// ------------------------These are the Object Classes---------------------------- //
// -------------------------------------------------------------------- //

function Product(image, name, weight, price, off){
  this.image = image;
  this.name = name;
  this.weight = weight;
  this.price = price;
  this.off = off;
  this.salePrice = function(){return this.price - (this.price * this.off);};
}

function Customer(image, name, isDomestic)
{
  this.image = image;
  this.name = name;
  this.isDomestic = isDomestic;
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function parseUpperCase(string){
  return string.toUpperCase();
}

function parseLowerCase(string){
  return string.toLowerCase();
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //