import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/assets/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase: string = `${environment.baseApiUrl}/usuarios`;



  constructor(private http: HttpClient) { }

  getUsers():  Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlBase);
  }

}
