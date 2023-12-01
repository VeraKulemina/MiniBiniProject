"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosText = localStorage.getItem("todos");
    if (todosText === null)
        return [];
    return JSON.parse(todosText);
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
