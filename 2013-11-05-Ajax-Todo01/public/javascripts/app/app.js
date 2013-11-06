$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('form#priority').on('submit', submitPriority);
  $('form#todo').on('submit', submitTodo);
}

function submitAjaxForm(e, form, successFn){
  var url = $(form).attr('action');
  var data = $(form).serialize();

  // below builds up options for ajax to send to node
  var options = {};
  options.url = url;
  options.type = 'POST';
  options.data = data;
  options.success = successFn;

  options.error = function(jqXHR, status, error){console.log(error);};

  $.ajax(options);

  // below prevents an event from fully fulfilling its task - in this case, from posting a page
  e.preventDefault();
}

function submitTodo(e){
  submitAjaxForm(e, this, function(data, status, jqXHR){
    htmlAddTodoToTable(data);
  });
}

function submitPriority(e){
  submitAjaxForm(e, this, function(data, status, jqXHR){
    htmlAddPriorityToSelectBox(data);
  });
}

function htmlAddTodoToTable(todo){
  var tr = '<tr><td class=completed></td><td class="title"></td><td class="dueDate"></td><td class="priority"></td><td class="delete"></td></tr>'
  var $tr = $(tr);

  $tr.children('.title').text(todo.title);
  $tr.children('.dueDate').text(moment(todo.dueDate).format('dddd, MMMM Do YYYY'));
  $tr.children('.priority').text(todo.priority.name);
  $tr.attr('data-todo-id', todo.id);
  $tr.css('background-color', todo.priority.color);

  $('#todos tbody').append($tr);

  $('select#priority-select').val('Select Priority');
  $('form#todo input').val('');
  $('form#todo input[name="title"]').focus();
}

function htmlAddPriorityToSelectBox(priority){
  var $option = $('<option>');
  $('#priority-select').append($option.val(priority._id).text(priority.name));
  $('form#priority input').val('');
  $('form#priority input[name="name"]').focus();
}
