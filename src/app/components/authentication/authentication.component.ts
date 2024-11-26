import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})

export class AuthenticationComponent {

  username: string = '';
  password: string = '';

  nameFormControl = new FormControl('', [Validators.required]);
  
  StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=.*[!@#$%^&*]).+$/;
  passFormControl = new FormControl('', [Validators.required, Validators.minLength(12), Validators.pattern(this.StrongPasswordRegx)]);

  constructor(private authenticationService: AuthenticationService) { }

  signIn() {
    this.authenticationService.signIn(this.username, this.password)
  }

  keyEnterPressed(name: string) {
    console.log(name + ' has been pressed')
  }

}
