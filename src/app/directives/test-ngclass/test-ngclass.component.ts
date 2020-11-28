import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngclass',
  templateUrl: './test-ngclass.component.html',
  styleUrls: ['./test-ngclass.component.css'],
})
export class TestNgclassComponent implements OnInit {
  isC1 = true;
  constructor() {}
  changeClasse() {
    this.isC1 = !this.isC1;
  }
  ngOnInit(): void {}
}
