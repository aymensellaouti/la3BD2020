import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo/services/todo.service';
import { Personne } from '../Model/personne';
import { LoggerService } from './../../services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [],
})
export class CvComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private todoService: TodoService
  ) {}
  selectedPersonne: Personne = null;
  ngOnInit(): void {
    this.loggerService.logger('cc je suis le cv component');
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
    /* this.todoService.loggerTodos(); */
  }
}
