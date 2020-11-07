import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap-compo',
  templateUrl: './recap-compo.component.html',
  styleUrls: ['./recap-compo.component.css'],
})
export class RecapCompoComponent implements OnInit {
  message = 'Hello LABD et LFIG';
  color = 'green';
  constructor() {}

  ngOnInit(): void {}
  makeItYellow() {
    this.color = 'yellow';
  }
}
