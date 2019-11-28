import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualRevenueDiagramComponent } from './annual-revenue-diagram.component';

describe('AnnualRevenueDiagramComponent', () => {
  let component: AnnualRevenueDiagramComponent;
  let fixture: ComponentFixture<AnnualRevenueDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualRevenueDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualRevenueDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
