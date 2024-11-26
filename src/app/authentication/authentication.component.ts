import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})

export class AuthenticationComponent implements OnInit {

  //authenticationStatus: boolean | undefined;
  username: string = '';
  password: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  ngOnInit(): void {
    //this.authenticationStatus = this.authenticationService.isAuth;
  }

  signIn() {
    this.authenticationService.signIn(this.username, this.password).then(
      () => {
        //this.authenticationStatus = this.authenticationService.isAuth;
        //console.log('Authentication Success for user [' + this.username + ']');
        //this.router.navigate(['template']);
      }
    );
  }

  signOut(user: string) {
    this.authenticationService.signOut(user);
    //this.authenticationStatus = this.authenticationService.isAuth;
  }

}
