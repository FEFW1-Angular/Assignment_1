import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISigninUser, IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:8080/api/signup`, user);
  }
  getUsers(): Observable<IUser[]> {
     return this.http.get<IUser[]>(`http://localhost:8080/api/users`);
  }
  signin(user: ISigninUser): Observable<ISigninUser>{
    return this.http.post<ISigninUser>(`http://localhost:8080/api/signin`, user)
  }
  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}
