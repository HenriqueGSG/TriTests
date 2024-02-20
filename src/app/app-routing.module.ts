import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';
import { PrivateComponent } from './pages/private/private.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { RoleGuardService } from './service/role-guard.service';
import { AdminComponent } from './pages/admin/admin.component';
import { AssessorComponent } from './pages/assessor/assessor.component';
import { GestorComponent } from './pages/gestor/gestor.component';

const routes: Routes = [
  // Redireciona para 'public' como página inicial padrão
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: 'public', component: PublicComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'assessor', component: AssessorComponent },
  { path: 'gestor', component: GestorComponent },
  {
    path: 'private', component: PrivateComponent, canActivate: [RoleGuardService] // Aqui utilizamos a função diretamente
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
