import { Injectable } from '@angular/core';
import { IJuego } from "../_models/juego";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  api = 'https://localhost:44324/api/Juegos/';

  constructor( private http: HttpClient ) { }

  gets(): Observable<IJuego[]>{
    return this.http.get<IJuego[]>(this.api + 'Listar');
  }

  getJuego(id:any): Observable<IJuego>{
    return this.http.get<IJuego>(this.api + 'Mostrar/' + id);
  }

  getJuegoBySala(id:any): Observable<IJuego[]>{
    return this.http.get<IJuego[]>(this.api + 'MostrarBySala/' + id);
  }

  crearJuego(juego: IJuego): Observable<IJuego> {
    return this.http.post<IJuego>(this.api + 'Crear', juego);
  }

  editarJuego(juego: IJuego): Observable<IJuego> {
    return this.http.put<IJuego>(this.api + 'Actualizar', juego);
  }

  eliminarJuego(id:any){
    return this.http.delete<IJuego>(this.api + 'Eliminar/' + id);
  }

  activar(id:any){
    return this.http.put(this.api + 'Activar/' + id, '');
  }

  desactivar(id:any){
    return this.http.put(this.api + 'Desactivar/' + id, '');
  }
}
