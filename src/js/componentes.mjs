import { Todo } from "../classes/index.js";
import { todoList } from "../index.js";

//referencia al documento
const list = document.querySelector(".todo-list");
const imputTodo = document.querySelector(".new-todo");

//funciones
export const crearHTML = (todo) => {
    const htmlTodo = `
    <li class="${todo.completado ? "completed" : ""}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""
        }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement("div");
    div.innerHTML = htmlTodo;
    list.append(div.firstElementChild);

    return div.firstElementChild;
};

//eventos
imputTodo.addEventListener("keyup", (event) => {
    if (event.keyCode === 13 && imputTodo.value.length > 0) {
        const todoCreado = new Todo(imputTodo.value);
        todoList.nuevoTodo(todoCreado);
        crearHTML(todoCreado);
        console.log(todoList);
        imputTodo.value = "";
    }
});


list.addEventListener('click', (event)=>{
    const nombreElemento = event.target.localName; //define si es label, buton, imput
    const todoElemento = event.target.parentElement.parentElement; //obtiene el HTML del elemento
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        list.removeChild(todoElemento);
    }
    console.log(todoList);
});