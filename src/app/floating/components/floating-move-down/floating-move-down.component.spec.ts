import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FloatingMoveDownComponent } from './floating-move-down.component';

describe('FloatingMoveDownComponent', () => {
  let component: FloatingMoveDownComponent;
  let fixture: ComponentFixture<FloatingMoveDownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingMoveDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingMoveDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
