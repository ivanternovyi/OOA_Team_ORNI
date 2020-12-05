import {NgModule} from '@angular/core';
import {AuthGuardService} from './services/auth-guard.service';
import {RegisterComponent} from './components/register/register.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {BookLibraryHomeComponent} from './components/book-library-home/book-library-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: BookLibraryHomeComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
