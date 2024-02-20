import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  // configurações do componente
  template: '', // ou um template que indique o processamento do login
})
export class AuthCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    if (this.authService.getIsLoggedIn()) {
      // Navega para o dashboard ou página inicial
      this.router.navigate(['/public']);
    } else {
      // Usuário não está logado ou o token não está no sessionStorage
      this.router.navigate(['/login']);
    }

  }
}
