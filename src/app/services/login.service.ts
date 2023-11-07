import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IJugador } from '../_models/jugador';
import { LocalStorageService } from "src/app/services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  // private api: string = 'https://localhost:44324/api/Jugadores/';
  // private api: string = 'http://localhost:8082/api/Jugadores/';
  api = 'https://localhost:44324/api/Usuarios/';

  constructor( 
    private http: HttpClient,
    private localStorage: LocalStorageService
    ) {
    // this.grabar_localstarage();
    // this.obtener_localstorage();
   }

   ngOnInit(){

   }

  login(nickName:any): Observable<IJugador>{
    return this.http.get<IJugador>(this.api + 'Login/' + nickName);
  }

  //  obtener_localstorage() {

  //   let nombre = localStorage.getItem("nombre");
  //   let persona = JSON.parse(localStorage.getItem("persona"));

  //   console.log(nombre);
  //   console.log(persona);
    

  //  }

  // grabar_localstarage(){

  //   let nombre: string = "Fernando";

  //   let persona:Persona  = {
  //     nombre: "juan",
  //     edad: 18
  //   }

  //   localStorage.setItem( "nombre", nombre );
  //   localStorage.setItem( "persona", JSON.stringify( persona ) );

  // }
}
