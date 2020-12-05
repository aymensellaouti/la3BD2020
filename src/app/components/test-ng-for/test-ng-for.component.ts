import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-for',
  templateUrl: './test-ng-for.component.html',
  styleUrls: ['./test-ng-for.component.css']
})
export class TestNgForComponent implements OnInit {
  images = [
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
