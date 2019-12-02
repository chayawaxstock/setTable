import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTablePlateComponent } from './edit-table-plate.component';

describe('EditTablePlateComponent', () => {
  let component: EditTablePlateComponent;
  let fixture: ComponentFixture<EditTablePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTablePlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTablePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
