import { Injectable } from '@angular/core';
import { Personne } from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[] = [];
  constructor() {
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
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
