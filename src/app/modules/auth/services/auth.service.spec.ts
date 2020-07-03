import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  const storageSpy = jasmine.createSpyObj<StorageService>('StorageService', ['saveLoggedIn', 'removeLoggedIn']);
  const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy },
        { provide: StorageService, useValue: storageSpy }
      ],
      imports: [ RouterTestingModule ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#doLogin', () => {
    beforeEach(() => {
      service.doLogin();
    });
    it('Should call storageService saveLoggedIn method...', () => {
      expect(storageSpy.saveLoggedIn).toHaveBeenCalled();
    });
    it('Should call router navigate method...', () => {
      expect(routerSpy.navigate).toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/books']);
    });
  });

  describe('#doLoggout', () => {
    beforeEach(() => {
      service.doLoggout();
    });
    it('Should call storageService removeLoggedIn method...', () => {
      expect(storageSpy.removeLoggedIn).toHaveBeenCalled();
    });

    it('Should call router navigate method...', () => {
      expect(routerSpy.navigate).toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
    });
  });
});
