import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRregisteredUserComponent } from './home-rregistered-user.component';

describe('HomeRregisteredUserComponent', () => {
  let component: HomeRregisteredUserComponent;
  let fixture: ComponentFixture<HomeRregisteredUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRregisteredUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRregisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
