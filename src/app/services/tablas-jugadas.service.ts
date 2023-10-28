import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJuego } from '../_models/juego';
import { ITabla } from '../_models/tabla';
import { ITablaJugada } from '../_models/tabla-jugada';

@Injectable({
  providedIn: 'root'
})
export class TablasJugadasService {

  // url = "http://localhost:8082/api/Tablas_Jugadas/";
  api = 'https://localhost:44324/api/Tablas_Jugadas/';

  constructor( private http: HttpClient ) { }

  getJugadas(id: number): Observable<ITablaJugada[]>{
    return this.http.get<ITablaJugada[]>(this.api + 'Jugadas/' + id);
  }

  // gets(): Observable<ITablaJugada[]>{
  //   return this.http.get<ITablaJugada[]>(this.api + 'Listar');
  // }

  // getTabla(id): Observable<ITablaJugada[]>{
  //   return this.http.get<ITablaJugada[]>(this.api + 'Mostrar/' + id);
  // }

  // crearTabla(tabla: ITablaJugada): Observable<ITablaJugada> {
  //   return this.http.post<ITablaJugada>(this.api + 'Crear', tabla);
  // }

  // editarTabla(tabla: ITablaJugada): Observable<ITablaJugada> {
  //   return this.http.put<ITablaJugada>(this.api + 'Actualizar', tabla);
  // }

  // eliminarTabla(id){
  //   return this.http.delete<ITablaJugada>(this.api + 'Eliminar/' + id);
  // }

  activar(id:any){
    return this.http.put(this.api + 'Activar/' + id, '');
  }

  desactivar(id:any){
    return this.http.put(this.api + 'Desactivar/' + id, '');
  }
}
