import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TemplateComponent } from './components/template/template.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { TestViewComponent } from './components/test-view/test-view.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'template', component: TemplateComponent, canActivate: [AuthGuard], data: { roles: ['VIEWER','USER','SUPER_USER','ADMIN'] } },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: { roles: ['USER', 'SUPER_USER', 'ADMIN'] } },
  { path: 'view', component: TestViewComponent, canActivate: [AuthGuard], data: { roles: ['USER', 'SUPER_USER', 'ADMIN'] } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
