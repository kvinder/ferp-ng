import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  department: string = 'MIS';
  password1: string;
  password2: string;
  errorMessage: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register() {
    console.log('name : ' + this.name);
    console.log('username : ' + this.username);
    console.log('email : ' + this.email);
    console.log('department : ' + this.department);
    console.log('password1 : ' + this.password1);
    console.log('password2 : ' + this.password2);
    console.log(this.password1.indexOf(this.password2));
    if(this.password1.indexOf(this.password2) < 0) {
      this.errorMessage = 'These passwords don\'t match. Try again?';
      this.password1 = '';
      this.password2 = '';
      return false;
    }

    let data = JSON.stringify({
      name: this.name,
      username: this.username,
      email: this.email,
      department: this.department,
      password1: this.password1,
      password2: this.password2
    });
    this.registerService.register(data).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
      this.errorMessage = 'invalid login';
    });
  }

}
