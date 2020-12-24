import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridMinMaxComponent } from './grid-min-max.component';

describe('GridMinMaxComponent', () => {
  let component: GridMinMaxComponent;
  let fixture: ComponentFixture<GridMinMaxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridMinMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMinMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
