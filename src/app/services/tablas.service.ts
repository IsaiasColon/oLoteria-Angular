import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITabla } from "../_models/tabla";

@Injectable({
  providedIn: 'root'
})
export class TablasService {

  // url = "http://localhost:8082/api/Tablas/";
  
  api = 'https://localhost:44324/api/Tablas/';

  constructor( private http: HttpClient ) { }

  gets(): Observable<ITabla[]>{
    return this.http.get<ITabla[]>(this.api + 'Listar');
  }

  getsByJugador(id:any): Observable<ITabla[]>{
    return this.http.get<ITabla[]>(this.api + 'MostrarByJugador/' + id);
  }

  getTabla(id:any): Observable<ITabla>{
    return this.http.get<ITabla>(this.api + 'Mostrar/' + id);
  }

  crearTabla(tabla: ITabla): Observable<ITabla> {
    return this.http.post<ITabla>(this.api + 'Crear', tabla);
  }

  editarTabla(tabla: ITabla): Observable<ITabla> {
    return this.http.put<ITabla>(this.api + 'Actualizar', tabla);
  }

  eliminarTabla(id:any){
    return this.http.delete<ITabla>(this.api + 'Eliminar/' + id);
  }

  activar(id:any){
    return this.http.put(this.api + 'Activar/' + id, '');
  }

  desactivar(id:any){
    return this.http.put(this.api + 'Desactivar/' + id, '');
  }
}
