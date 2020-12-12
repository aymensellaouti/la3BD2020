import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from './../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // La liste des todos
  listeTodos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}
  //Logger la liste des todo
  loggerTodos(): void {
    this.loggerService.logger(this.listeTodos);
  }
  // Ajouter un todo
  addTodo(todo: Todo): void {
    this.listeTodos.push(todo);
  }
  // Retourner la liste des todos
  getListeDesTodos(): Todo[] {
    return this.listeTodos;
  }
  //Supprimer un todo de la liste des todos
  deleteTodo(todo: Todo): void {
    const index = this.listeTodos.indexOf(todo);
    if (index === -1) {
      alert('element innexistant');
    } else {
      this.listeTodos.splice(index, 1);
    }
  }

}
