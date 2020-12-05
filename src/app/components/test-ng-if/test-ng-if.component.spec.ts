import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgIFComponent } from './test-ng-if.component';

describe('TestNgIFComponent', () => {
  let component: TestNgIFComponent;
  let fixture: ComponentFixture<TestNgIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
