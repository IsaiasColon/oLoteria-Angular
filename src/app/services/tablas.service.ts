import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITabla } from "../_models/tabla";

@Injectable({
  providedIn: 'root'
})
export class TablasService {

  // url = "http://localhost:8082/api/Tablas/";

  // api = "https://localhost:5001/api/Tablas/";
  api = 'https://localhost:44324/api/Tablas/';

  constructor( private http: HttpClient ) { }

  gets(): Observable<ITabla[]>{
    return this.http.get<ITabla[]>(this.api + 'Listar');
  }

  getsByJugador(id:number): Observable<ITabla[]>{
    return this.http.get<ITabla[]>(this.api + 'MostrarByJugador/' + id);
  }

  getTabla(id:number): Observable<ITabla>{
    console.log(id);      
    return this.http.get<ITabla>(this.api + 'Mostrar/' + id);
  }

  crearTabla(tabla: ITabla): Observable<ITabla> {
    return this.http.post<ITabla>(this.api + 'Crear', tabla);
  }

  editarTabla(tabla: ITabla): Observable<ITabla> {
    return this.http.put<ITabla>(this.api + 'Actualizar', tabla);
  }

  eliminarTabla(id:number){
    return this.http.delete<ITabla>(this.api + 'Eliminar/' + id);
  }

  activar(id:number){
    return this.http.put(this.api + 'Activar/' + id, '');
  }

  desactivar(id:number){
    return this.http.put(this.api + 'Desactivar/' + id, '');
  }

  Generar() {
    let cartas: Array<number> = [];    
    while (cartas.length < 16)
    {
      let carta: number = Math.floor(Math.random() * (55 - 1)) + 1;
      if (!cartas.includes(carta)) {
        cartas.push(carta);
      }
    }  
    return cartas;
  }

  stringToList( cartas: string ) {
    // let list: Array<number> = [];
    // cartas.split(',',16).forEach(carta => {
    //   let nCarta: number = Number(carta);
    //   list.push(nCarta);
    // });

    return cartas.split(',',16).map( c => Number(c));
    // cartas.split(',',16).map(Number);
  }

  listToString( cartas: Array<number> ) {
    let nCartas:string = "";
    cartas.forEach(carta => {
      if( !nCartas.length ) { 
        nCartas = carta.toString();
      } else {
        nCartas += `,${carta}`;
      }
    });
    return nCartas;
  }

  agregarCartas(id: number): Observable<any> {    
    return this.http.put(this.api + `Agregarcartas/` + id, true);
  }

}
