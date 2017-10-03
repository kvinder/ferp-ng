import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { urlAPI } from '../app.config'

@Injectable()
export class LoginService {

  constructor(private http: Http) {

  }

  login(usercreds): Observable<boolean> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post(urlAPI + '/login', usercreds, { headers }).map((res: Response) => {
      let token = res.json() && res.json().token && res.json().name;
      if (token) {
        localStorage.setItem("name", res.json().name);
        localStorage.setItem("token", res.json().token);
        localStorage.setItem("roles", res.json().roles);
        return true;
      } else return false;
    });
  }

}
