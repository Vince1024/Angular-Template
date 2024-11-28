import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TemplateComponent } from './components/template/template.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
