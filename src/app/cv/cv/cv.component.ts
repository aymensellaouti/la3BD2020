import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  constructor() {}
  selectedPersonne: Personne = null;
  ngOnInit(): void {}
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
