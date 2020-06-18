import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When clicked on Logar =>', () => {
    describe('With valid form values =>', () => {
      it('Should call service isValid method...', () => {

      });

      it('Should call router navigate method with "home" as path...', () => {

      });
    });

    describe('And no values are inserted in the form=>', () => {
      it('Should display an error message on login field...', () => {

      });

      it('Should display an error message on pass field', () => {

      });
    });
  });

});
