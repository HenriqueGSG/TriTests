import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return of(false);
    }

    return this.authService.fetchAndStoreUserDetails().pipe(
      map(isFetched => {
        if (!isFetched) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
