document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = "";
  });

  function addTodo(todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Selesai";
    completeButton.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});
