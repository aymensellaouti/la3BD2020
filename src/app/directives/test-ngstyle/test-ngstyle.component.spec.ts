import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgstyleComponent } from './test-ngstyle.component';

describe('TestNgstyleComponent', () => {
  let component: TestNgstyleComponent;
  let fixture: ComponentFixture<TestNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
