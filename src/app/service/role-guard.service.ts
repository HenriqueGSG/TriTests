import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['expectedRoles'] as string[];
    if (!this.authService.getIsLoggedIn() || !this.authService.hasRole(expectedRoles)) {
      this.router.navigate(['/unauthorized']); // Ou qualquer outra rota apropriada
      return false;
    }
    return true;
  }
}