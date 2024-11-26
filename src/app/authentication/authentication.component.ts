import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})

export class AuthenticationComponent implements OnInit {

  authenticationStatus: boolean | undefined;
  @Input() username: string = '';
  @Input() password: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  ngOnInit(): void {
    this.authenticationStatus = this.authenticationService.isAuth;
  }

  onSignIn() {
    this.authenticationService.signIn().then(
      () => {
        this.authenticationStatus = this.authenticationService.isAuth;
        console.log('Authentication Success for user [' + this.username + ']');
        this.router.navigate(['template']);
      }
    );
  }

  onSignOut() {
    this.authenticationService.signOut();
    this.authenticationStatus = this.authenticationService.isAuth;
  }

}
