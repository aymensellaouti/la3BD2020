import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', '', 38, 12345),
      new Personne(
        2,
        'Besbes',
        'nour',
        'Datascientist',
        'rotating_card_profile.png',
        25,
        784521
      ),
      new Personne(
        3,
        'Kchaou',
        'nour',
        'informaticienne',
        '          ',
        22,
        574865
      ),
    ];
  }

  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
