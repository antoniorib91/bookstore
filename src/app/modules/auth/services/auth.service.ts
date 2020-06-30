import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  public doLogin() {
    this.storage.saveLoggedIn();
    this.router.navigate(['/books']);
  }

  public doLoggout() {
    this.storage.removeLoggedIn();
    this.router.navigate(['/login']);
  }
}
