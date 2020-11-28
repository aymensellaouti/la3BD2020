import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-ngstyle',
  templateUrl: './test-ngstyle.component.html',
  styleUrls: ['./test-ngstyle.component.css'],
})
export class TestNgstyleComponent implements OnInit {
  @Input() color = 'green';
  @Input() bgc = 'pink';
  @Input() font = 'verdana';
  constructor() {}

  ngOnInit(): void {}
}
