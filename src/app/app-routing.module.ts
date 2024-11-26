import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: '', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
