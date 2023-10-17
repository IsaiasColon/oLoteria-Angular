import { Injectable, OnInit } from '@angular/core';
import { IJuego } from '../_models/juego';
import { IJugador } from '../_models/jugador';
import { ITabla, Tabla } from '../_models/tabla';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private usuarioConectado: IJugador = {} as any;
  private tablas: ITabla[] = [];
  private juego: IJuego = {} as any;
  
  constructor() { }

  obtenerUsuarioConectado(): any {
    this.usuarioConectado = JSON.parse(localStorage.getItem("usuarioConectado") as any);
    if (this.usuarioConectado) {
      return this.usuarioConectado;
    }else {
      console.log("No ha iniciado sesion");
    }

  }

  guardarUsuarioConectado(usuario: IJugador){
    localStorage.setItem( "usuarioConectado", JSON.stringify( usuario ) );
  }

  borrarUsuarioConectado(){
    localStorage.getItem("tablas");
    localStorage.removeItem("usuarioConectado");
  }

  obtenerTablas(): any{    
    this.tablas = JSON.parse(localStorage.getItem("tablas") || '');
    if (this.tablas) {
      return this.tablas;
    }else {
      console.log("No se han seleccionado tablas");
    }
  }

  guardarTablas(tablas: ITabla[]){
    if (tablas) {
      this.borrarTablas();
      localStorage.setItem( "tablas", JSON.stringify( tablas ) );
      console.log("Se guardaron las tablas");
    }
  }

  borrarTablas(){
    localStorage.removeItem( "tablas" );
    console.log("Se borraron las tablas");
    
  }

  // NO TERMINADO!!!!!
  // Comparar las tablas y actualizar localstorage si se han seleccionado tablas distintas a las actuales en localstorage
  compararTablas(tablas: ITabla[]){
    var tablasOLDs = JSON.parse(localStorage.getItem("tablas") || '');
    console.log(tablasOLDs);
    console.log(tablas);
    
    if (tablasOLDs == tablas) {
      console.log("Son las mismas tablas");
    } else{
      console.log("Las tablas han cambiado");
    }
  }

  obtenerJuego(): any{    
    this.juego = JSON.parse(localStorage.getItem("juego") || '');
    if (this.juego) {
      return this.juego;
    }else {
      console.log("No se han seleccionado Juego");      
    }
  }

  guardarJuego(Juego: IJuego){    
    localStorage.setItem( "juego", JSON.stringify( Juego ) );
  }

  borrarJuego(){
    localStorage.removeItem( "juego" );
  }

  obtenerTablasSeleccionadas(){    
    let tablas = JSON.parse(localStorage.getItem("tablasSeleccionadas") || '');
    if (tablas) {
      return tablas;
    }else {
      console.log("No se han seleccionado tablas");
    }
  }

  guardarTablasSeleccionadas(tablas: Tabla[]){
    if (tablas) {
      this.borrarTablas();
      localStorage.setItem( "tablasSeleccionadas", JSON.stringify( tablas ) );
      console.log("Se guardaron las tablas");
    }
  }

  borrarTablasSeleccionadas(){
    localStorage.removeItem( "tablasSeleccionadas" );
    console.log("Se borraron las tablas");
    
  }

}