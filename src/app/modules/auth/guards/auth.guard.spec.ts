import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { StorageService } from 'src/app/services/storage.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  const storageSpy = jasmine.createSpyObj<StorageService>('StorageService', ['hasItem']);
  const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy },
        { provide: StorageService, useValue: storageSpy }
      ],
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('#canActivate', () => {
    describe('When call the method =>', () => {
      describe('When have logged =>', () => {
        let subject;
        beforeEach(() => {
          storageSpy.hasItem.and.returnValue(true);
          subject = guard.canActivate(new ActivatedRouteSnapshot(), {url: 'testUrl'} as RouterStateSnapshot);
        });
        it('Should return true', () => {
          expect(subject).toBeTruthy();
        });
        it('Should call storageService hasItem method...', () => {
          expect(storageSpy.hasItem).toHaveBeenCalled();
          expect(storageSpy.hasItem).toHaveBeenCalledWith('loggedIn');
        });
      });

      describe('When doesnt have logged =>', () => {
        let subject;
        beforeEach(() => {
          storageSpy.hasItem.and.returnValue(false);
          subject = guard.canActivate(new ActivatedRouteSnapshot(), {url: 'testUrl'} as RouterStateSnapshot);
        });
        it('Should call router navigate method...', () => {
          expect(routerSpy.navigate).toHaveBeenCalled();
          expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
        });

        it('Should return false', () => {
          expect(subject).toBeFalsy();
        });
      });
    });
  });
});
