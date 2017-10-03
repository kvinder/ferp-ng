import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { urlAPI } from '../app.config'

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  register(usercreds): Observable<any> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post(urlAPI + '/register', usercreds, { headers }).map((res: Response) => {
      return res.json();
    });
  }

}
