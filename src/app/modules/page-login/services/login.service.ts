import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@enviroments/environment.development';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    let params = JSON.stringify({
      email: email,
      clave: password
    });
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(environment.API_URL + 'Usuario/inicioSesion', params, { headers: headers }).pipe(
      map(res => res)
    );
  }

  loginComercio(email: string, password: string): Observable<any> {
    let params = JSON.stringify({ email: email, clave: password });
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(environment.API_URL + 'comercio/inicioSesion', params, { headers: headers })
      .pipe(
        map(res => res)
      );
  }

}
