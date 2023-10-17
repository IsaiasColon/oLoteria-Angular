import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IRol } from "../_models/rol";
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  // url = "https://localhost:44324/api/Roles/";
  // url = "http://localhost:8082/api/Roles/";
  // api = environment.url + 'api/Roles/';
  api = 'https://localhost:44324/api/Roles/';
  headers = new Headers();

  constructor( private http: HttpClient ) { }

  gets(): Observable<IRol[]>{
    return this.http.get<IRol[]>(this.api + 'Listar');
  }

  getRol(id:any): Observable<IRol[]>{
    return this.http.get<IRol[]>(this.api + 'Mostrar/' + id);
  }

  crearRol(rol: IRol): Observable<IRol> {
    return this.http.post<IRol>(this.api + 'Crear', rol);
  }

  editarRol(rol: IRol): Observable<IRol> {
    return this.http.put<IRol>(this.api + 'Actualizar', rol);
  }

  eliminarRol(id:any){
    return this.http.delete<IRol>(this.api + 'Eliminar/' + id);
  }

  activar(id:any){
    return this.http.put(this.api + 'Activar/' + id, '');
  }

  desactivar(id:any){
    return this.http.put(this.api + 'Desactivar/' + id, '');
  }

}
