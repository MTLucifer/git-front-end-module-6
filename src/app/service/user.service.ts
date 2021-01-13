import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../interface/i-user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // tslint:disable-next-line:variable-name
  private url_API = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  createUser(user: IUser): Observable<any> {
    return this.http.post<IUser>(this.url_API + `register`, user);
  }
}
