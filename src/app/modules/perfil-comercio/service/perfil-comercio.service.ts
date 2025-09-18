import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@enviroments/environment.development';
import { OfertaPost } from '@shared/models/ofertaPost';
import { OfertaPublicada } from '@shared/models/ofertaPublicada';
import { ProductoOferta } from '@shared/models/ProductoOferta';
import { tipoProducto } from '@shared/models/tipoProducto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilComercioService {

  constructor(private http: HttpClient) { }

  obtenerOfertasDelComercio(idComercio: number): Observable<OfertaPublicada[]> {
    return this.http.get<OfertaPublicada[]>(environment.API_URL + `comercio/verOfertas/${idComercio}`);
  }
  obtenerTipoDeProductos(): Observable<tipoProducto[]> {
    return this.http.get<tipoProducto[]>(environment.API_URL + `Producto/tipoProductos`);
  }

  obtenerMarcasDelProducto(idProducto: any): Observable<String[]> {
    return this.http.get<String[]>(environment.API_URL + `Producto/marcas/${idProducto}`);
  }

  obtenerProductos(selectedProduct: string, selectedMarca: string): Observable<ProductoOferta[]> {
    return this.http.get<ProductoOferta[]>(environment.API_URL + `Producto/productos/${selectedProduct}/${selectedMarca}`);
  }
  buscarProducto(code: String): Observable<ProductoOferta> {
    return this.http.get<ProductoOferta>(environment.API_URL + `Producto/producto/${code}`);
  }

  publicarOferta(oferta: OfertaPost)
    : Observable<String> {
    return this.http.post<String>(environment.API_URL + `comercio/cargarOferta/`, oferta);

  }

}
