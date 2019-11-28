import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableGlassComponent } from './edit-table-glass.component';

describe('EditTableGlassComponent', () => {
  let component: EditTableGlassComponent;
  let fixture: ComponentFixture<EditTableGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTableGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
