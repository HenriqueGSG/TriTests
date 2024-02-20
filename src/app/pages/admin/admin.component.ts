import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  user: User | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getIsLoggedIn()) {
      this.authService.getUserDetails().subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (error) => {
          console.error('Error fetching user details', error);
          // Tratar erro, talvez redirecionar para login ou mostrar mensagem
        }
      });
    }
  }

}
