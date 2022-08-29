import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/assets/Usuario';
import { environment } from 'src/environments/environment';
import { Response } from 'src/assets/Response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase: string = `${environment.baseApiUrl}/usuarios`;

  constructor(private http: HttpClient) { }

  getUsers():  Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlBase);
  }

  getUserById(id: number): Observable<Usuario> {
    let url = `${this.urlBase}/${id}`;
    return this.http.get<Usuario>(url); 
  }

  deleteUser(id: number): Observable<Usuario> {
    let url = `${this.urlBase}/${id}`;
    return this.http.delete<Usuario>(url);
  }

  updateUser(userUp: Usuario): Observable<Usuario> {
    let url = `${this.urlBase}/${userUp.id}`;

    return this.http.put<Usuario>(url, userUp);
  }

  createUser(newUser: Usuario): Observable<Usuario> {
    let url = `${this.urlBase}`;
    newUser.id = 0;
    return this.http.post<Usuario>(url, newUser);
  }
}
 