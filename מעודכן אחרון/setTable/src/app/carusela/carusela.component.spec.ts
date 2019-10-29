import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselaComponent } from './carusela.component';

describe('CaruselaComponent', () => {
  let component: CaruselaComponent;
  let fixture: ComponentFixture<CaruselaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaruselaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
