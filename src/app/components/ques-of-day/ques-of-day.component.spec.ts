import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesOfDayComponent } from './ques-of-day.component';

describe('QuesOfDayComponent', () => {
  let component: QuesOfDayComponent;
  let fixture: ComponentFixture<QuesOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
