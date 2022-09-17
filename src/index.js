import { Todo, TodoList } from './classes';
import './style.css';

const todoList = new TodoList();

const tarea = new Todo('Aprender JS');
const tarea2 = new Todo('Esudiar Ingles');

todoList.nuevoTodo(tarea),
todoList.nuevoTodo(tarea2);

console.log(todoList);