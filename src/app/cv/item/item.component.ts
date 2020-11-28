import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() sendSelectedPersonne = new EventEmitter();
  constructor() { }

  selectPersonne() {
    // Emmetre l evenement et y insérer la personne
    this.sendSelectedPersonne.emit(
      this.personne
    );
  }
  ngOnInit(): void {
  }

}
