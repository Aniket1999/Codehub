import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyQuesComponent } from './daily-ques.component';

describe('DailyQuesComponent', () => {
  let component: DailyQuesComponent;
  let fixture: ComponentFixture<DailyQuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyQuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
