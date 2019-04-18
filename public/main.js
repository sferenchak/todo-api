$(document).ready(() => {
  $.getJSON("/api/todos").then(addTodos);

  $("#todoInput").keypress(event => {
    if (event.which == 13) {
      createTodo();
    }
  });

  $('.list').on('click', 'li', function() {
    updateTodo($(this));
  });

  $(".list").on("click", "span", function(event) {
    event.stopPropagation();
    removeTodo($(this).parent());
  });
});

function addTodos(todos) {
  todos.forEach(todo => {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.name + " <span>X</span></li>");
  newTodo.data("id", todo._id);
  newTodo.data('completed', todo.completed);
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}

function createTodo() {
  let userInput = $("#todoInput").val();
  $.post("/api/todos", { name: userInput })
    .then(newTodo => {
      $("#todoInput").val("");
      addTodo(newTodo);
    })
    .catch(err => {
      console.log(err);
    });
}

function updateTodo(todo) {
  let clickedId = todo.data('id');
  let updateURL = '/api/todos/' + clickedId;
  let isDone = !todo.data('completed');
  let updateData = {completed: isDone};
  $.ajax({
    method: 'PUT',
    url: updateURL,
    data: updateData
  })
  .then(() => {
    todo.toggleClass('done');
    todo.data('completed', isDone);
  })
}

function removeTodo(todo) {
  let clickedId = todo.data("id");
  let deleteURL = "/api/todos/" + clickedId;
  $.ajax({
    method: "DELETE",
    url: deleteURL
  }).then(data => {
    todo.remove();
  });
}
