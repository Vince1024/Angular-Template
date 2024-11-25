import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})

export class AuthenticationComponent implements OnInit {
  authenticationStatus: boolean | undefined;

  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.authenticationStatus = this.authenticationService.isAuth;
  }

  onSignIn() {
    this.authenticationService.signIn().then(
      () => {
        this.authenticationStatus = this.authenticationService.isAuth;
      }
    );
  }

  onSignOut() {
    this.authenticationService.signOut();
    this.authenticationStatus = this.authenticationService.isAuth;
  }

}
