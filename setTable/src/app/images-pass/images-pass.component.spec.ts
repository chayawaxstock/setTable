import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPassComponent } from './images-pass.component';

describe('ImagesPassComponent', () => {
  let component: ImagesPassComponent;
  let fixture: ComponentFixture<ImagesPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
