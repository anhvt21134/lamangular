import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../common/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`http://localhost:3000/registerusers`);
  }
  deleteUser(id: any): Observable<IUser> {
    return this.http.delete<IUser>(`http://localhost:3000/registerusers/${id}`);
  }
  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:3000/registerusers/${id}`);
  }
  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3000/registerusers`, user);
  }
  updateUser(user: IUser): Observable<IUser> {
    return this.http.patch<IUser>(`http://localhost:3000/registerusers/${user.id}`, user);
  }

}
