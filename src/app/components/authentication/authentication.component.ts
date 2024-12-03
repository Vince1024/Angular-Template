import { Component, Renderer2, signal } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})

export class AuthenticationComponent {

  hide = signal(true);

  username: string = '';
  password: string = '';
  StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=.*[!@#$%^&*]).+$/;

  nameFormControl = new FormControl('', [Validators.required]);
  passFormControl = new FormControl('', [Validators.required, Validators.minLength(12), Validators.pattern(this.StrongPasswordRegx)]);

  constructor(private authenticationService: AuthenticationService, private renderer: Renderer2) { }

  signIn() {
    this.username = this.nameFormControl.value || '';
    this.password = this.passFormControl.value || '';

    this.authenticationService.login(this.username, this.password)
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
