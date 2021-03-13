import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login() {

    this.authService.login(this.model).subscribe(data=>{
      console.log('logged in success');
    },error=>{
      console.log('Failed');
    })
  }

  loggedIn(){
    const token = localStorage.getItem('token')
    return token!=undefined?true:false;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('User Logged Out!')
  }
}
