import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISala } from "../_models/sala";

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  // url = "http://localhost:8082/api/Salas/";
  api = 'https://localhost:44324/api/Salas/';

  constructor( private http: HttpClient ) { }

  gets(): Observable<ISala[]>{
    return this.http.get<ISala[]>(this.api + 'Listar');
  }

  getSala(id:any): Observable<ISala>{
    return this.http.get<ISala>(this.api + 'Mostrar/' + id);
  }

  crearSala(sala: ISala): Observable<ISala> {
    return this.http.post<ISala>(this.api + 'Crear', sala);
  }

  editarSala(sala: ISala): Observable<ISala> {
    return this.http.put<ISala>(this.api + 'Actualizar', sala);
  }

  eliminarSala(id:any){
    return this.http.delete<ISala>(this.api + 'Eliminar/' + id);
  }

  activar(id:any){
    return this.http.put(this.api + 'Activar/' + id, '');
  }

  desactivar(id:any){
    return this.http.put(this.api + 'Desactivar/' + id, '');
  }
}
