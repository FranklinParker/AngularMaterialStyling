import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingExpandOneComponent } from './floating-expand-one.component';

describe('FloatingExpandOneComponent', () => {
  let component: FloatingExpandOneComponent;
  let fixture: ComponentFixture<FloatingExpandOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingExpandOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingExpandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
