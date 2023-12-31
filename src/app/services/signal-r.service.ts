import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import { Observable, Subject } from 'rxjs';
import { IJuego } from '../_models/juego';
import { IJugador } from '../_models/jugador';
import {  } from "@angular/common/";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public hubConnection : HubConnection = {} as any;
  emNotifica: EventEmitter<any> = new EventEmitter();
  emNotificaJugadores: EventEmitter<any> = new EventEmitter();
  emNotificaJuego: EventEmitter<IJuego> = new EventEmitter();
  emNotificaCarta: EventEmitter<number> = new EventEmitter();
  emIniciarJuego: EventEmitter<boolean> = new EventEmitter();

  private $allFeed: Subject<string> = new Subject<string>();

  public get AllFeedObservable(): Observable<string> {
    return this.$allFeed.asObservable();
  }

  public listenToAllFeeds() {
    (<HubConnection>this.hubConnection).on("NotificarTodos", (data: string) => {
      this.$allFeed.next(data);
    });
  }

  // url = "http://localhost:8082/api/Hubs/";
  // url = "https://localhost:44324/api/Hubs/";
  api = 'https://localhost:44324/api/Hubs/';

  constructor(private http: HttpClient) { 
    // console.log("Inicio el servicio SingalR");
    // this.hubConnection = builder.withUrl(`${this.api}hub/oLoteria`).build();
    let builder = new HubConnectionBuilder();
    this.hubConnection = builder.withUrl('https://localhost:44324/hub/oLoteria').build();

    this.hubConnection.on("enviartodos", (mensaje:any) =>{
      console.log(mensaje);
      let art = JSON.parse(mensaje);
      this.emNotificaJugadores.emit(art);
    });
    
    this.hubConnection.on("enviarjuego", (resp:any) =>{
      console.log(resp);
      let juego: IJuego = JSON.parse(resp);
      this.emNotificaJuego.emit(juego);
    });

    this.hubConnection.on("lanzarcarta", (resp:any) =>{
      let carta = JSON.parse(resp);
      this.emNotificaCarta.emit(carta);
    });
    
    this.hubConnection.on("iniciarjuego", (resp) =>{
      console.log(resp);
      let juego: IJuego = JSON.parse(resp);
      this.emNotificaJuego.emit(juego);
    });

    this.hubConnection.on("prueba", (mensaje:any) =>{
      console.log(mensaje);
      let art = JSON.parse(mensaje);
      this.emNotifica.emit(art);
    });

    this.hubConnection.start();
  }

  // entrarEnSala(jugador: IJugador): Observable<IJugador>{
  //   console.log(jugador);
  //   return this.http.post<IJugador>(this.api + 'Entrar', jugador);
  // }

  actualizaJugadores(jugadores: IJugador[]){    
    let mensaje: string = JSON.stringify(jugadores);
    console.log(mensaje);
    
    this.hubConnection.invoke("JugadorIN", jugadores);
  }

  entrarEnSala(jugador: IJugador){    
    let mensaje: string = JSON.stringify(jugador);
    console.log(mensaje);
    
    this.hubConnection.invoke("EntrarSala", mensaje);
  }

  prueba(user:any){
    // console.log("User en Signalr: " + user);
    let mensaje: string = JSON.stringify(user);
    console.log(mensaje);
    
    this.hubConnection.invoke("NotificarTodos", mensaje);
  }

  enviarJuego(juego: IJuego): Observable<IJuego>{
    return this.http.post<IJuego>(this.api + 'EnviarJuego', juego);
  }

  enviarCarta(carta:any){
    console.log("Mandar Carta en Signalr: " + carta);
    carta = JSON.stringify(carta);
    
    this.hubConnection.invoke("LanzarCarta", carta);
  }

  echarBaraja(){
    this.hubConnection.invoke("EcharBaraja");
  }

  pausar(){
    this.hubConnection.invoke("Pausar");
  }

  // public hubConnection: HubConnection;
  // emNotifica: EventEmitter<IArticulo> = new EventEmitter();

  // constructor() {

  //   console.log("Se inicio el servicio signal");    
  //   let builder = new HubConnectionBuilder();
  //   this.hubConnection = builder.withUrl("http://localhost:56055/cnn").build();

  //   this.hubConnection.on("enviartodos", (mensaje) =>{
  //     console.log(mensaje);
  //     let art: IArticulo = JSON.parse(mensaje);
  //     this.emNotifica.emit(art);
  //   });

  //   this.hubConnection.start();
  //  }

}
