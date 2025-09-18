import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@enviroments/environment.development';
import { ListaPost } from '@shared/models/listaPost';
import { Oferta } from '@shared/models/oferta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptimizadorListaService {

  constructor(private http: HttpClient) { }

  obtenerOfertas(filtro: ListaPost): Observable<any> {
    const respuesta = this.http.post<Oferta>(environment.API_URL + 'oferta/listadoOfertas', filtro);
    return respuesta;
  }

  obtenerOfertasPorComercio(filtro: ListaPost): Observable<any> {
    const respuesta = this.http.post<Oferta>(environment.API_URL + 'Oferta/recorrerMenos', filtro);
    return respuesta;
  }

  guardarLista(body: any) {
    this.http.post(environment.API_URL + 'listadoOfertas/guardarListado', body).subscribe(
      (response) => {
        console.log('La petición se realizó correctamente.', response);
      },
      (error) => {
        console.error('Error al realizar la petición:', error);
      }
    );
  }


}
