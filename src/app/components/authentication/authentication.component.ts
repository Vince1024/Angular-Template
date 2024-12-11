import { Component, Renderer2, signal } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrl: './authentication.component.scss',
    standalone: false
})

export class AuthenticationComponent {

  hide = signal(true);
  authenticating = false;

  username: string = '';
  password: string = '';
  StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=.*[!@#$%^&*]).+$/;

  nameFormControl = new FormControl('', [Validators.required]);
  passFormControl = new FormControl('', [Validators.required, Validators.minLength(12), Validators.pattern(this.StrongPasswordRegx)]);

  constructor(public globalService: GlobalService, private authenticationService: AuthenticationService,private router: Router) { 
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe();
  }

  signIn() {
    this.authenticating = true;
    this.username = this.nameFormControl.value || '';
    this.password = this.passFormControl.value || '';

    this.authenticationService.login(this.username, this.password);
  }

  clearUsername() {
    this.nameFormControl.setValue('');
  }

  clearPassword() {
    this.passFormControl.setValue('');
  }

  keyEnterPressed(name: string) {
    console.log(name + ' has been pressed')
    if (name == 'name')
    {
      
    }

    if (name == 'pass')
    {
      
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
