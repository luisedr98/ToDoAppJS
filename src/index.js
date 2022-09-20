import { Todo, TodoList } from './classes';
import { crearHTML } from './js/componentes.mjs';
import './style.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearHTML(todo));