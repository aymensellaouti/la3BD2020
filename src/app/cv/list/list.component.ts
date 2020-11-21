import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        'rotating_card_profile2.png',
        38,
        12345
      ),
      new Personne(
        2,
        'Besbes',
        'nour',
        'Datascientist',
        'rotating_card_profile.png',
        25,
        784521
      ),
    ];
  }
}
