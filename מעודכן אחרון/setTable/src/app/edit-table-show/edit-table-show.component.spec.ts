import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableShowComponent } from './edit-table-show.component';

describe('EditTableShowComponent', () => {
  let component: EditTableShowComponent;
  let fixture: ComponentFixture<EditTableShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTableShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
