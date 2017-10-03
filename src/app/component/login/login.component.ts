import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    let data = JSON.stringify({ username: this.username, password: this.password });
    this.loginService.login(data).subscribe(res => {
      if(res) {
        window.location.href = '/';
      }
    },
    err => {
      this.errorMessage = 'invalid login';
      this.username = '';
      this.password = '';
    });
  }
  
}
