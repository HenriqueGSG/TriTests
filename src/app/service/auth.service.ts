import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'APW_TOKEN_DATA';
  private readonly userDetailsUrl = '/api/user/details';

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  fetchAndStoreUserDetails(): Observable<boolean> {
    if (!this.isLoggedIn()) {
      return of(false);
    }

    const token = this.getToken();
    return this.http.post<any>(this.userDetailsUrl, { token }, { observe: 'response' })
      .pipe(
        tap(response => {
          // Store user details as needed
        }),
        mapTo(true),
        catchError((error) => {
          console.error('Error fetching user details:', error);
          return of(false);
        })
      );
  }

  logout(): void {
    sessionStorage.removeItem(this.tokenKey);
    // Clear user details if stored
  }
}
