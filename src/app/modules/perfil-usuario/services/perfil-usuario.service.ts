import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@enviroments/environment.development';
import { ListaDetalle } from '@shared/models/listaDetalle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService {

  constructor(private http: HttpClient) { }


  obtenerListasDelUsuario(idUsuario: number): Observable<any> {
    return this.http.get<any>(environment.API_URL + `listadoOfertas/misListados?idUsuario=${idUsuario}`);
  }


  verDetalleLista(idListado: number, idUsuario: number): Observable<ListaDetalle> {
    return this.http.get<ListaDetalle>(environment.API_URL + `listadoOfertas/detalleListado?idUsuario=${idUsuario}&idListado=${idListado}`)
  }

}
