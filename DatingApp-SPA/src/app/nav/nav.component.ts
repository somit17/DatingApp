import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify/alertify.service';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.model).subscribe(
      (data) => {
        this.alertify.success('Login Successful');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return token != undefined ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('User Logged Out!');
  }
}
