import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@enviroments/environment.development';
import { Bebidas } from '@shared/models/bebidas';
import { Comidas } from '@shared/models/comidas';
import { Evento } from '@shared/models/evento';
import { ProductoLista } from '@shared/models/ProductoLista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEventoService {

  constructor(private http: HttpClient) { }

  //Metodos de las preguntas
  getListaEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(environment.API_URL + 'evento/eventos');
  }

  getListaTiposDeComidas(idEvento: number): Observable<Comidas[]> {
    return this.http.get<Comidas[]>(environment.API_URL + `Evento/comidas?idEvento=${idEvento}`);
  }

  getListaBebidas(idEvento: number): Observable<Bebidas[]> {
    return this.http.get<Bebidas[]>(environment.API_URL + `Evento/bebidas?idEvento=${idEvento}`);
  }

  getListadeCompras(nCantidadInvitados: number, aSelecciones: {}) {
    return this.http.post<ProductoLista[]>(environment.API_URL + `Evento/listadoConCantidades/${nCantidadInvitados}`, aSelecciones);
  }

}
