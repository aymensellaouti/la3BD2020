import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';
import { LoggerService } from './../../services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  constructor(
    private loggerService: LoggerService
  ) {}
  selectedPersonne: Personne = null;
  ngOnInit(): void {
    this.loggerService.logger('cc je suis le cv component');
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
