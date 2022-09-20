import { Todo, TodoList } from './classes';
import { crearHTML } from './js/componentes.mjs';
import './style.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender JS');

todoList.nuevoTodo(tarea),
crearHTML(tarea);

console.log(todoList);