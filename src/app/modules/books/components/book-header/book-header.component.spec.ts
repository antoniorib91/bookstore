import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHeaderComponent } from './book-header.component';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { By } from '@angular/platform-browser';
import { TitleComponent } from 'src/app/modules/shared/components/title/title.component';
import { ButtonComponent } from 'src/app/modules/shared/components/button/button.component';

describe('BookHeaderComponent', () => {
  let component: BookHeaderComponent;
  let fixture: ComponentFixture<BookHeaderComponent>;
  let debugEl: DebugElement;
  const authServiceSpy = jasmine.createSpyObj<AuthService>('AuthService', ['doLoggout']);
  const modalServiceSpy = jasmine.createSpyObj<BsModalService>('BsModalService', ['show']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHeaderComponent ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: BsModalService, useValue: modalServiceSpy }
      ],
      imports: [
        SharedModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .overrideComponent(BookHeaderComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHeaderComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When init the component =>', () => {
    describe('When mobile =>', () => {
      it('Should contians an app-title...', () => {
        const el = debugEl.queryAll(By.css('.mobile'))[0].children[0].queryAll(By.directive(TitleComponent))[0];
        expect(el).not.toBeNull();
        expect(el.name).toBe('app-title');
      });

      it('Sould contains an app-button...', () => {
        const el = debugEl.queryAll(By.css('.mobile'))[0].children[0].queryAll(By.directive(ButtonComponent))[0];
        expect(el).not.toBeNull();
        expect(el.name).toBe('app-button');
      });

      it('Sould contains an app-books-filter...', () => {
        const el = debugEl.queryAll(By.css('.mobile'))[0].children[1];
        expect(el).not.toBeNull();
        expect(el.name).toBe('app-books-filter');
      });
    });
    describe('When desketop =>', () => {
      it('Should contains an app-title...', () => {
        const el = debugEl.queryAll(By.css('.desktop'))[0].children[0];
        expect(el).not.toBeNull();
        expect(el.name).toBe('app-title');
      });

      it('Sould contains links with add and signout texts..', () => {
        const elLinks = debugEl.queryAll(By.css('.desktop'))[0].children[2].children;
        expect(elLinks.length).toBe(2);
        expect(elLinks[0].nativeElement.textContent).toEqual('Add Book');
        expect(elLinks[1].nativeElement.textContent).toEqual('Sign out');
      });

      it('Sould contains an app-books-filter...', () => {
        const el = debugEl.queryAll(By.css('.desktop'))[0].children[1];
        expect(el).not.toBeNull();
        expect(el.classes['filter-bar']).toBeTrue();
        expect(el.name).toBe('app-books-filter');
      });
    });
  });

  describe('#onClickSignout =>', () => {
    let previousValue;
    beforeEach(() => {
      previousValue = component.hideMobMenu;
      component.onClickSignout(new Event('onclick'));
    });
    it('Should change hideMobMenu value...', () => {
      expect(component.hideMobMenu).not.toBe(previousValue);
    });
    it('Should call AuthService doLoggout method...', () => {
      expect(authServiceSpy.doLoggout).toHaveBeenCalled();
    });
  });

  describe('#onClickAddBook =>', () => {
    let previousValue;
    beforeEach(() => {
      previousValue = component.hideMobMenu;
      component.onClickAddBook(new Event('onclick'));
    });
    it('Should change hideMobMenu value...', () => {
      expect(component.hideMobMenu).not.toBe(previousValue);
    });
    it('Should call AuthService doLoggout method...', () => {
      expect(modalServiceSpy.show).toHaveBeenCalled();
    });
  });

  describe('#onClickBars =>', () => {
    it('Should change hideMobMenu value...', () => {
      const previousValue = component.hideMobMenu;
      component.onClickBars();
      expect(component.hideMobMenu).not.toBe(previousValue);
    });
  })
});
