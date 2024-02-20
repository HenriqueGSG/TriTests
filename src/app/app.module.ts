import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './pages/public/public.component';
import { PrivateComponent } from './pages/private/private.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AssessorComponent } from './pages/assessor/assessor.component';
import { GestorComponent } from './pages/gestor/gestor.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    AuthCallbackComponent,
    AdminComponent,
    AssessorComponent,
    GestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
