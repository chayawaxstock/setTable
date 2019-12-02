import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginManegerComponent } from './login-maneger.component';

describe('LoginManegerComponent', () => {
  let component: LoginManegerComponent;
  let fixture: ComponentFixture<LoginManegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginManegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
