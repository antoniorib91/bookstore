import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveLoggedIn() {
    localStorage.setItem('loggedIn', 'true');
  }

  public removeLoggedIn() {
    localStorage.removeItem('loggedIn');
  }

  public hasItem(value: string) {
    return localStorage.getItem(value) !== null && localStorage.getItem(value) !== undefined;
  }
}
