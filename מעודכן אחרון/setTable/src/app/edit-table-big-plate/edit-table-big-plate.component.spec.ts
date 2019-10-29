import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableBigPlateComponent } from './edit-table-big-plate.component';

describe('EditTableBigPlateComponent', () => {
  let component: EditTableBigPlateComponent;
  let fixture: ComponentFixture<EditTableBigPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTableBigPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTableBigPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
