import {Todo} from './todo';

export class App {
  constructor() {
    this.heading = "Todos";
    this.todos = [];
    this.doneTodos = [];
    this.todoDescription = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription));
      this.todoDescription = '';
      this.updateDoneTodos()
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.updateDoneTodos()
    }
  }

  updateDoneTodos() {
    this.doneTodos = this.todos.filter((todo) => {
      return todo.done
    });
  }
}
