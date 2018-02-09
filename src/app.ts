import {Todo} from "./todo";

export class App {
  
    message = 'Test';
    todoList  = [];
    newItem = "";

    constructor(){
      this.todoList.push(new Todo("Do a job.")) ;
      this.todoList.push(new Todo("Work hard.")) ;
      this.todoList.push(new Todo("Drive home.")) ;
      this.todoList[2].done = true;

    }

    addToDo(){
      this.todoList.push(new Todo(this.newItem));
      this.newItem = "";
    }

    removeToDo(item){
      var index = this.todoList.indexOf(item);
      this.todoList.splice(index, 1);
    }
}
