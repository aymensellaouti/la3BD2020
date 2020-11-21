import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  /*
    1- Créer un event avec la classe EventEmitter
    2- Dire quand l'emmetre
    3- Insérer la données à emettre
  */
  @Input() monMessage = 'contenu inséré par moi même';
  @Output() sendMessageToDad = new EventEmitter();
  @Output() sendColor = new EventEmitter();
  @Input() favoriteColor = 'RED';
  message = 'Cc je suis le fiston';
  donnesDuPere = {
    message: 'cc',
    age: 38,
    metier: 'teacher',
  };
  constructor() {}

  ngOnInit(): void {}

  sendEvent() {
    this.sendMessageToDad.emit(this.donnesDuPere);
  }

  sendDefaultColor() {
  
    this.sendColor.emit(this.favoriteColor);
  }
}
