import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHeaderComponent } from './book-header.component';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('BookHeaderComponent', () => {
  let component: BookHeaderComponent;
  let fixture: ComponentFixture<BookHeaderComponent>;
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
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
