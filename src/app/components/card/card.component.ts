import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Teacher';
  age = 38;
  path = 'rotating_card_profile.png';
  constructor() { }

  ngOnInit(): void {
  }

}
