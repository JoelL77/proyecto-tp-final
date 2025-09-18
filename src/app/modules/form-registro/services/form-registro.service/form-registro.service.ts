import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '@enviroments/environment.development';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-form-registro.service',
  imports: [],
  templateUrl: './form-registro.service.html',
  styleUrl: './form-registro.service.css'
})
export class FormRegistroService {

  constructor(private http: HttpClient) { }

  registro(userRegistrado): Observable<any> {
    let params = JSON.stringify(userRegistrado);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(environment.API_URL + 'Usuario/registro', params, { headers: headers })
      .pipe(
        map(res => res)
      );
  }

  registroComercio(comercioRegistrado): Observable<any> {
    let params = JSON.stringify(comercioRegistrado);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(environment.API_URL + 'comercio/registro', params, { headers: headers })
      .pipe(
        map(res => res)
      );
  }

  verificarCuit(cuit: string): Observable<any> {
    return this.http.get(environment.API_URL + `verificadorComercio/verificarComercio?cuit=${cuit}`);
  }

}
