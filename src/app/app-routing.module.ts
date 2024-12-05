import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TemplateComponent } from './components/template/template.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'template', component: TemplateComponent, canActivate: [AuthGuard], data: { roles: ['VIEWER','USER','SUPER_USER','ADMIN'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['USER', 'SUPER_USER', 'ADMIN'] } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
