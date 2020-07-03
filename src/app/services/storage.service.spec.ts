import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    service.removeLoggedIn();
  });

  describe('#saveLoggedIn =>', () => {
    it('Should call localStore "setItem" method...', () => {
      spyOn(localStorage, 'setItem').and.callFake(() => {});
      service.saveLoggedIn();
      expect(localStorage.setItem).toHaveBeenCalledWith('loggedIn', 'true');
    });
  });

  describe('#removeLoggedIn =>', () => {
    it('Should call localStore "removeItem" method...', () => {
      spyOn(localStorage, 'removeItem').and.callFake(() => {});
      service.removeLoggedIn();
      expect(localStorage.removeItem).toHaveBeenCalledWith('loggedIn');
    });
  });

  describe('#hasItem =>', () => {
    it('Should return false when not have item...', () => {
      expect(service.hasItem('loggedIn')).toBeFalse();
    });
    it('Should return true when have a item at localStorage...', () => {
      service.saveLoggedIn();
      expect(service.hasItem('loggedIn')).toBeTrue();
    });
  });
});
