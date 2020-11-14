import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  color: string;
  constructor() {}

  ngOnInit(): void {
    this.color = this.defaultColor;
  }

  changeColor(couleur: string) {
    this.color = couleur;
  }
  reset() {
    this.color = this.defaultColor;
  }
}
