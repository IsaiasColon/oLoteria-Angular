import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { RolesService } from 'src/app/services/roles.service';
import { SalasService } from 'src/app/services/salas.service';
import { TablasService } from 'src/app/services/tablas.service';
import { Carta, Cartas } from "../../_models/carta";
// import Swal from 'sweetalert2';
import { SignalRService } from 'src/app/services/signal-r.service';
import { Tabla } from 'src/app/_models/tabla';

interface User {
  _id: number,
  name: string,
  tablas: Tabla[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fichasColocadas: number[] = [];

  sala:any;
  tablas = [];
  user: User = {} as User;
  cartasLanzadas: number[] = [];
  Ganador = false;

  constructor(
    public rolesService: RolesService,
    public jugadoresService: JugadoresService,
    public tablasService: TablasService,
    public salasService: SalasService,
    private _snackBar: MatSnackBar
    ) {
    let roles = rolesService.gets().subscribe(resp => {
      console.log(resp);
    });

    let jugadores = jugadoresService.gets().subscribe(resp => {
      console.log(resp);
    });

    let tablas = tablasService.gets().subscribe(resp => {
      console.log(resp);
    });

  }

  ngOnInit(): void {
  }

  // Adelantar(cartas: any){
  //   // var carta: Carta = {numero: 0, name: ""};
  //   var numero = 0;
  //   while(cartas >= 0){
  //     numero = Math.floor(Math.random() * (55 - 1)) + 1;
  //     if (!this.cartasLanzadas.includes(numero)) {
  //       this.cartasLanzadas.push(numero);
  //     }
  //     cartas--;
  //   }
  // }

  // // Swet(){
  // //   Swal.fire({
  // //     title: 'Error!',
  // //     text: 'Do you want to continue',
  // //     icon: 'error',
  // //     confirmButtonText: 'Cool'
  // //   });
  // // }

  // fichaColocada(carta:any){
  //   console.log(carta);
  //   if (this.fichasColocadas.includes( carta )) {
  //     this.fichasColocadas.splice(this.fichasColocadas.indexOf(carta), 1);
  //   } else{
  //     if (this.cartasLanzadas.includes(carta)) {
  //       this.fichasColocadas.push(carta);
  //     }
  //   }
  // }

  // clickEvent(event:any){
  //   console.log(event);    
  // }

  // crearMatriz(cartas:Array<number>){
  //   var row1 = [];
  //   var row2 = [];
  //   var row3 = [];
  //   var row4 = [];
  //   var col1 = [];
  //   var col2 = [];
  //   var col3 = [];
  //   var col4 = [];

  //   // row1.push(cartas.(carta => carta < 4));
  //   row1 = cartas.slice(0, 4);
  //   row2 = cartas.slice(4, 8);
  //   row3 = cartas.slice(8, 12);
  //   row4 = cartas.slice(12, 16);
  //   this.puedeGanarHorizontal(row1,row2,row3,row4);
  // }

  // crearMatrizz(cartas:Array<number>){
  //   let tabla:Array<Array<number>> = [];
  //   cartas.forEach(carta => {
  //     // tabla
  //   });
  // }

  // puedeGanarHorizontal(row1, row2, row3, row4){
  //   var encontradas = 0;
  //   row1.forEach(carta => {
  //     if (this.cartasLanzadas.includes(carta)) {
  //       encontradas ++;
  //     }
  //   });
  //   console.log('Se encontraron ' + encontradas + ' en la row1');
  //   if (encontradas >= 4) { this.Ganador = true;}
  //   encontradas = 0;
  //   row2.forEach(carta => {
  //     if (this.cartasLanzadas.includes(carta)) {
  //       encontradas ++;
  //     }
  //   });
  //   console.log('Se encontraron ' + encontradas + ' en la row2');
  //   if (encontradas >= 4) { this.Ganador = true;}
  //   encontradas = 0;
  //   row3.forEach(carta => {
  //     if (this.cartasLanzadas.includes(carta)) {
  //       encontradas ++;
  //     }
  //   });
  //   console.log('Se encontraron ' + encontradas + ' en la row3');
  //   if (encontradas >= 4) { this.Ganador = true;}
  //   encontradas = 0;
  //   row4.forEach(carta => {
  //     if (this.cartasLanzadas.includes(carta)) {
  //       encontradas ++;
  //     }
  //   });
  //   console.log('Se encontraron ' + encontradas + ' en la row4');
  //   if (encontradas >= 4) { this.Ganador = true;}
  //   encontradas = 0;
  //   if (this.Ganador) {
  //     Swal.fire('Hay Ganador!!!');
  //   }
  // }

  // async IniciarJuego(){
  //   this.Ganador = false;
  //   this.cartasLanzadas = [];
  //   const delay = ms => new Promise(res => setTimeout(res, ms));
  //   this.speechCarta('Corre y se va corriendo con.');
  //   await delay(2200);
  //   while (this.cartasLanzadas.length < 54) {
  //     // while (this.cartasLanzadas.length < 54) {
  //     if (this.Ganador) {        
  //       console.log('hay Ganador');
  //       break;        
  //     }else {
  //       this.LanzarCarta();
  //       await delay(2000);
  //       console.log(this.cartasLanzadas.length);
  //     }
  //   }
  //   console.log('Termino de lanzar cartas');
    
  // }

  // verJugadas(){
  //   this.tablas.forEach(tabla => {
  //     // console.log(tabla.cartas);      
  //     if (this.cartasLanzadas.length > 25) {
        
  //       this.crearMatriz(tabla.cartas);
  //     }
  //   });
  // }

  // LanzarCarta(){
  //   var carta: Carta = new Carta(0,"", 0);
  //   while(true){
  //     carta.numero = Math.floor(Math.random() * (55 - 1)) + 1;
  //     carta.nombre = Cartas.find(x=>x.numero == carta.numero).nombre;
  //     if (!this.cartasLanzadas.includes(carta.numero)) {
  //       this.cartasLanzadas.push(carta.numero);
  //       this.speechCarta(carta.nombre);
  //       if (this.cartasLanzadas.length > 25) {
  //         this.verJugadas();
  //       }
  //       break;
  //     }
  //   }
  // }

  // speechCarta(carta) {
  //   const v = this.f.text(carta);
  //   this.svc.speak(this.f.text(carta));
  // }

  // speechAll() {
  //   for (const text of this.cartasLanzadas.join(',')) {
  //     const v = this.f.text(text);
  //     this.svc.speak(this.f.text(text));
  //   }
  // }

  // cancel() {
  //   this.svc.cancel();
  // }
  // pause() {
  //   this.svc.pause();
  // }

  // resume() {
  //   this.svc.resume();
  // }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }

  // crearSala(){
  //   var sala = {
  //     _id: 11,
  //     name: 'Sala de skp',
  //     jugadores: 0
  //   }
  //   this.sala = sala;
  //   this.openSnackBar('Se ha creado la sala', 'Me vale!');
  // }

  // GenerarTabla(){
  //   var tabla = new Tabla(0, "Sin nombre", [], 0);

  //   var carta: number = 0;
  //   var cartas = [];
  //   while(cartas.length < 16){
  //     carta = Math.floor(Math.random() * (54 - 1)) + 1;      
  //     if (!cartas.includes(carta)) {
  //       cartas.push(carta);
  //     }
  //   }
  //   var nCartas = [];
  //   cartas.forEach(carta => {
  //     nCartas.push(new Carta(0,'',carta));
  //   });
  //   tabla.cartas = nCartas;
  //   tabla.jugador = this.user._id;
  //   this.tablas.push(tabla);
  //   // console.log(cartas);
  //   if (this.user) {
  //     this.user.tablas.push(tabla);
  //     // console.log(this.user);
  //   }
  //   // this.crearMatriz(cartas);
  //   console.log(tabla);
    
  //   this.openSnackBar('Tabla Creada', 'Me vale!');
  // }

  // getUser(){
  //   var id = Math.floor(Math.random() * (9999 - 1)) + 1;
  //   var user = {
  //     _id: id,
  //     name: `usuario ${id}`,
  //     tablas: []
  //   }
  //   this.user = user;
  //   console.log(this.user);
  //   this.openSnackBar('Usuario Creado', 'Me vale!');
  // }

}
