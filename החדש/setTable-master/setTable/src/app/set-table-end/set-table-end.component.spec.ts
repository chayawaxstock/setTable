import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTableEndComponent } from './set-table-end.component';

describe('SetTableEndComponent', () => {
  let component: SetTableEndComponent;
  let fixture: ComponentFixture<SetTableEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTableEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTableEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
