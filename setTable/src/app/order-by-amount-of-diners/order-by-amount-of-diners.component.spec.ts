import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByAmountOfDinersComponent } from './order-by-amount-of-diners.component';

describe('OrderByAmountOfDinersComponent', () => {
  let component: OrderByAmountOfDinersComponent;
  let fixture: ComponentFixture<OrderByAmountOfDinersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderByAmountOfDinersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByAmountOfDinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
