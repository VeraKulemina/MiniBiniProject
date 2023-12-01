interface Todo{
    text: string;
    completed: boolean;
}
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")! as HTMLFormElement;
const list = document.querySelector("ul")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);



function readTodos(): Todo[] {
    const todosText = localStorage.getItem("todos");
    if (todosText === null) return [];
    return JSON.parse(todosText);
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo ={
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";

}

function createTodo(todo: Todo) {
    const newLI = document.createElement("li");
    const checkbox= document.createElement("input");
    checkbox.type="checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list?.append(newLI);
}

form.addEventListener("submit", handleSubmit);
