'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
  turnHandlersOff();
  turnHandlersOn();
  db.products = [];
  db.customers = [];
  db.orders = [];
  db.cart = [];
  db.pagination.currentRowCount = 0;
  db.pagination.currentPage = 1;
  Δdb.remove();
}

function teardownTest(){
}

test('Add Product', function(){
  expect(12);

  $('#product-image').val('ipad-air.png');
  $('#product-name').val('Ipad Air');
  $('#product-weight').val('1.0');
  $('#product-price').val('500.00');
  $('#product-off').val('10');
  $('#add-product').trigger('click');

  equal(db.products.length, 1, 'products array should have 1 element');
  ok(db.products[0].id, 'id should be populated');
  ok(db.products[0] instanceof Product, 'product should be an instanceof Product');
  equal(db.products[0].image, 'ipad-air.png', 'product should have an image');
  equal(db.products[0].name, 'Ipad Air', 'product should have a name');
  equal(db.products[0].weight, 1.0, 'product should have a weight');
  QUnit.close(db.products[0].salePrice(), 450, 0.01, 'product should have a sale price');

  equal($('#products tr').length, 2, 'should be 2 rows in table');
  equal($('#products tr:nth-child(2) > td').length, 6, 'should be 6 columns in row');
  equal($('#products .product-name').text(), 'Ipad Air', 'name column should be populated');
  equal($('#products .product-sale').text(), '$450.00', 'sale column should be populated');
  equal($('#products .product-image img').attr('src'), '/img/ipad-air.png', 'image column should be populated');
});

test('Product Pagination', function(){
  expect(18);

  for(var i = 0; i < 12; i++){
    var name = Math.random().toString(36).substring(2);
    var image = Math.random().toString(36).substring(2) + '.png';
    var weight = Math.random() * 100;
    var price = Math.random() * 1000;
    var off = Math.random() * 100;

    createTestProduct(name, image, weight, price, off);
  }

  equal(db.products.length, 12, 'should have 12 products');
  equal(db.pagination.perPage, 5, 'should be 5 products per page');
  equal(db.pagination.currentPage, 1, 'should be on first page');
  equal($('#products tr').length, 6, 'should have 5 products in table');
  equal($('#previous.hidden').length, 1, 'previous button should be hidden');
  equal($('#next:not(.hidden)').length, 1, 'next button should not be hidden');

  $('#next').trigger('click');

  equal(db.pagination.currentPage, 2, 'should be on second page');
  equal($('#products tr').length, 6, 'should have 5 products in table');
  equal($('#previous:not(.hidden)').length, 1, 'previous button should not be hidden');
  equal($('#next:not(.hidden)').length, 1, 'next button should not be hidden');

  $('#next').trigger('click');

  equal(db.pagination.currentPage, 3, 'should be on third page');
  equal($('#products tr').length, 3, 'should have 2 products in table');
  equal($('#previous:not(.hidden)').length, 1, 'previous button should not be hidden');
  equal($('#next.hidden').length, 1, 'next button should be hidden');

  $('#previous').trigger('click');
  $('#previous').trigger('click');

  equal(db.pagination.currentPage, 1, 'should be on first page');
  equal($('#products tr').length, 6, 'should have 5 products in table');
  ok($('#previous').hasClass('hidden'), 'previous button should be hidden');
  ok(!$('#next').hasClass('hidden'), 'next button should not be hidden');
});

test('Add Customer', function(){
  expect(7);

  $('#customer-image').val('bob.png');
  $('#customer-name').val('Bob');
  $('#domestic')[0].checked = true;
  $('#add-customer').trigger('click');

  equal(db.customers.length, 1, 'should have 1 customer in array');
  ok(db.customers[0] instanceof Customer, 'Should have instance of Customer');
  equal(db.customers[0].name, 'Bob', 'Name should be present');
  equal(db.customers[0].image, 'bob.png', 'image should be present');
  ok(db.customers[0].id,  'Id should be present');
  ok(db.customers[0].isDomestic,  'should be domestic');

  ok(!$('#domestic')[0].checked, 'domestic should not be checked');

});

test('Customer Drop DOwn and Shopping Cart', function(){
  expect(7);

  for(var i = 0; i < 5; i++){
    var name = Math.random().toString(36).substring(2);
    var image = Math.random().toString(36).substring(2) + '.png';
    var isDomestic = _.shuffle([true, false])[0] ;//randomly domestic or not..

    createTestCustomer(name, image, isDomestic);
  }
  createTestCustomer('Bob', 'bob.png', true);

  //table headers
  // name, count, amount,weight, shipping, total

  equal(db.customers.length, 6, 'should have 6 customers in array');
  equal($('select#select-customer option').length, 6, 'should have 6 option tags');
  equal($('select#select-customer option:nth-child(1)').val(), 'Bob', 'Bob should be at the top of the list');
  equal($('select#select-customer option:nth-child(1)').text(), 'Bob', 'Bob text should be at the top of the list');
  ok($('table#cart').length, 'Shopping cart should be visible');
  equal($('table#cart th').length,6, 'Should be 6 columns');
  ok($('#purchase').length, 'purchase button should be visible');


});

test('Add Items to shopping Cart', function(){
  expect(19);

  createTestProduct('Ipad', 'Ipad.png', '1.0', '50', '10');//sale price 450
  createTestProduct('cd', 'cd.png', '.5', '200', '0');//sale 200
  createTestProduct('Apple TV', 'apple.png', '1.5', '100', '5');// sale -95

  createTestCustomer('Bob', 'bob.png', true);
  createTestCustomer('Sally', 'sally.png', false);

  $('select#select-customer').val('Sally');
  $('select#select-customer').trigger('change');


  //2 imems added to card
  $('#products tr:nth-child(3) .product-image img').trigger('click');
  $('#products tr:nth-child(3) .product-image img').trigger('click');

  // 1 item
  $('#products tr:nth-child(2) .product-image img').trigger('click');

  // add another item
  $('#products tr:nth-child(4) .product-image img').trigger('click');



  equal(db.cart.customer.name, 'Sally', 'shopping cart should belong to sally');

  ok(db.cart.customer instanceof Customer, 'Customer should be an instanceof Customer');
debugger;
  equal(db.cart.products.length, 4, 'There should be 4 products in cart');
  ok(db.cart.products[0] instanceof Product, 'Product should be an instanceof of Product');
  equal(db.cart.totals.count, 4, 'Should have choosen 4 items');
  equal(db.cart.totals.amount, 945, 'amount total should be 945');
  equal(db.cart.totals.weight, 3.5, 'weight total should be 3.5');
  //domestic 50 cent a pound and international is 1.50 lb
  equal(db.cart.totals.shipping, 5.25, 'shipping total should be 5.25');
  //grand is total amount + shipping
  equal(db.cart.totals.grand, 950.25, 'grand total should be 950.25');

  equal($('#cart tr').length,4, 'should be 4 rows in cart');
  equal($('#cart tfoot tr').length,1, 'should be footer');
  equal($('#cart tbody tr').length,3, 'should be 3 items in body');

  equal($('#cart tbody tr:nth-child(1) .product-name').text(),'Ipad','name should be Ipad');
  equal($('#cart tbody tr:nth-child(1) .product-count').text(),'2','count should be 2');

  equal($('#cart tfoot tr #cart-count').text(), '4', 'Should have 4 items');
  equal($('#cart tfoot tr #cart-amount').text(), '$945', 'amount should be $945');
  equal($('#cart tfoot tr #cart-weight').text(), '3.5 lbs', 'weight should be 3.5 lbs');
  equal($('#cart tfoot tr #cart-shipping').text(), '$5.25', 'cart shipping should be $5.25');
  equal($('#cart tfoot tr #cart-total').text(), '$950.25', 'cart total should be $950.25');

});

function createTestProduct(name, image, weight, price, off){
  $('#product-name').val(name);
  $('#product-image').val(image);
  $('#product-weight').val(weight);
  $('#product-price').val(price);
  $('#product-off').val(off);
  $('#add-product').trigger('click');
}

function  createTestCustomer(name, image, isDomestic)
{
  $('#customer-image').val(image);
  $('#customer-name').val(name);

  if (isDomestic)
  {
    $('#domestic')[0].checked = true;
  }else{
    $('#international')[0].checked = true;
  }
  $('#add-customer').trigger('click');
}

