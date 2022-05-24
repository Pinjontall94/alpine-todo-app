// Takes data and stores in alpine
function addTodo(x) {
  Alpine.store('todos').push(x);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// The following code will fire when alpine is initialized
//   (adding todos if they already exist, or creating an empty array)
document.addEventListener('alpine:init', () => {
  const existingTodos = localStorage.getItem('todos');
  todos = JSON.parse(existingTodos) || [];

  Alpine.store('todos', todos);
})
