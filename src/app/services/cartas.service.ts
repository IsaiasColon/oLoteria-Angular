import { Injectable } from '@angular/core';
import { ICarta } from '../_models/carta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartasService {
  api = 'https://localhost:44324/Cartas/';

  constructor( private http: HttpClient ) { }

  gets(): Observable<ICarta[]>{
    return this.http.get<ICarta[]>(this.api + 'Listar');
  }

  getCarta(id:any): Observable<ICarta[]>{
    return this.http.get<ICarta[]>(this.api + 'Mostrar/' + id);
  }

  getCartasByTabla(id:any): Observable<ICarta[]>{
    return this.http.get<ICarta[]>(this.api + 'CartasTablaList/' + id);
  }

  GenerarCartas(id:any): Observable<ICarta[]>{
    return this.http.post<ICarta[]>(this.api + 'GenerarCartas/' + id, '');
  }

  crearCarta(carta: ICarta): Observable<ICarta> {
    return this.http.post<ICarta>(this.api + 'Crear', carta);
  }

  editarCarta(carta: ICarta): Observable<ICarta> {
    return this.http.put<ICarta>(this.api + 'Actualizar', carta);
  }

  eliminarCarta(id:any){
    return this.http.delete<ICarta>(this.api + 'Eliminar/' + id);
  }

  activar(id:any){
    return this.http.put(this.api + 'Activar/' + id, '');
  }

  desactivar(id:any){
    return this.http.put(this.api + 'Desactivar/' + id, '');
  }

  actualizarTabla(tablas:any, id:any) {
    return this.http.put(this.api + 'ActualizarCartas/' + id, tablas);
  }
}
