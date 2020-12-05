import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-if',
  templateUrl: './test-ng-if.component.html',
  styleUrls: ['./test-ng-if.component.css'],
})
export class TestNgIFComponent implements OnInit {
  isHidden = false;
  constructor() {}

  ngOnInit(): void {}
  showHide() {
    this.isHidden = !this.isHidden;
  }
}
