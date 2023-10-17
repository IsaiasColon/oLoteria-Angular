import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJugador } from '../_models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  api = 'https://localhost:44324/api/Jugadores/';

  constructor( private http: HttpClient ) { }
  
  entrarEnSala(jugador: IJugador): Observable<IJugador>{
    return this.http.post<IJugador>(this.api + 'Entrar', jugador.id);
  }

  gets(): Observable<IJugador[]>{
    return this.http.get<IJugador[]>(this.api + 'Listar');
  }

  getJugador(id:any): Observable<IJugador[]>{
    return this.http.get<IJugador[]>(this.api + 'Mostrar/' + id);
  }

  login(nickName:any): Observable<IJugador[]>{
    return this.http.get<IJugador[]>(this.api + 'Login/' + nickName);
  }

  crearJugador(jugador: IJugador): Observable<IJugador> {
    return this.http.post<IJugador>(this.api + 'Crear', jugador);
  }

  editarJugador(jugador: IJugador): Observable<IJugador> {
    return this.http.put<IJugador>(this.api + 'Actualizar', jugador);
  }

  eliminarJugador(jugador:any){
    return this.http.delete<IJugador>(this.api + 'Eliminar/' + jugador);
  }

  activar(jugador:any){
    return this.http.put(this.api + 'Activar/' + jugador, jugador);
  }

  desactivar(jugador:any){
    return this.http.put(this.api + 'Desactivar/' + jugador, jugador);
  }

}
