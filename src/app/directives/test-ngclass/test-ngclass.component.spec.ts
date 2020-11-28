import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgclassComponent } from './test-ngclass.component';

describe('TestNgclassComponent', () => {
  let component: TestNgclassComponent;
  let fixture: ComponentFixture<TestNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
