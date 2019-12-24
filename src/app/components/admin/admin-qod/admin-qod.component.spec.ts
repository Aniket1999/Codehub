import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQodComponent } from './admin-qod.component';

describe('AdminQodComponent', () => {
  let component: AdminQodComponent;
  let fixture: ComponentFixture<AdminQodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
