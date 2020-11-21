import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit {
  monMessagePourMonFils = 'Salut c est papa';
  bgc = 'green';
  constructor() {}

  ngOnInit(): void {}
  processSonMessage(messageDuFils) {
    alert(
      `Mon message est ${messageDuFils.message} et j'ai ${messageDuFils.age} et mon metier est ${messageDuFils.metier}`
    );
  }

  changeColor(newColor) {
    this.bgc = newColor;
  }
}
