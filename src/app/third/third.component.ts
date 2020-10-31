import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent implements OnInit {
  name = 'sellaouti';
  firstname = 'nour';
  isHidden = false;
  contenu = '';
  color = 'green';
  constructor() {}

  ngOnInit(): void {}
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(messageInput) {
    this.contenu = messageInput;
  }
}
