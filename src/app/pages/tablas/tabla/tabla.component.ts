import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TablasService } from 'src/app/services/tablas.service';
import { ITabla } from 'src/app/_models/tabla';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CartasService } from 'src/app/services/cartas.service';
import { Carta, Cartas, ICarta } from 'src/app/_models/carta';
import { TablaFloatComponent } from '../components/tabla-float/tabla-float.component';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  row0 = ['0:0', '0:1', '0:2', '0:3'];
  row1 = ['1:0', '1:1', '1:2', '1:3'];
  row2 = ['2:0', '2:1', '2:2', '2:3'];
  row3 = ['3:0', '3:1', '3:2', '3:3'];

  tabla: ITabla = {} as ITabla;
  cartas: any[] = [];
  id: string = '';

  constructor(
    private activated: ActivatedRoute,
    private _ts: TablasService,
    private _cs: CartasService
  ) { }

  ngOnInit(): void {
    this.activated.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.getTabla(params['id']);

      // if (this.tabla) {
      //   this.mostrarCartas(this.tabla.cartas);
      // }
      // this.mostrarCartas();
      // this.getCartas(params['id']);
    });
  }

  getTabla(id: number){
    this._ts.getTabla(id).subscribe(tabla => {
      console.log(tabla);
      this.tabla = tabla;
    })
  }

  mostrarCartas(cartas: any[]){
    if (cartas) {
      console.log(this.cartas);
      this.cartas = cartas.map( c => new Carta(c.id, c.numero, c.tabla, c.activo));      
      console.log(this.cartas);

      // this.tablaFloat.Cartas = this.cartas;
      // this.getCartas(tabla);
    }
    else{
      console.log('No hay tabla');
      
    }
  }

  getCartas(tabla: any){
    this._cs.getCartasByTabla(tabla).subscribe( (cartas: ICarta[]) => {
      console.log(cartas);
      this.cartas = cartas.map( c => new Carta(c.id, c.numero, c.tabla, c.activo));
    });
  }

  cartaConvert(cartas: Carta[]){

  }

  GenerarCartas(tabla: any){
    this._cs.GenerarCartas(tabla).subscribe( (cartas: ICarta[]) => {
      console.log(cartas);
      this.cartas = cartas.map( c => new Carta(c.id, c.numero, c.tabla, c.activo));
      // this.tablaFloat.Cartas = this.cartas;
      // this.getCartas(tabla);
    });
  }

  agregarCartas(id: number){
    console.log(id);
    
    this._ts.agregarCartas(id).subscribe( resp => {
      // console.log(resp);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.previousContainer);
      console.log(event.container);
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // console.log(event.container.data);
      // console.log(event.previousIndex);
      // console.log(event.currentIndex);
      
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  nTabla:any[] = [];

  nuevaTabla( event: any ){
    console.log(event);    
    this.nTabla = event;
  }

  guardarTabla(){
    console.log("Guardar Tabla");
    this.cartas.forEach(carta => {
      console.log(`la carta ${carta} fue borrada`);
      
      // this._cs.eliminarCarta(carta);
    });
    this.nTabla.forEach(carta => {
      carta = {numero: carta, tabla:this.id};
      console.log(carta);
      
      this._cs.crearCarta(carta);
    });
    // this._cs.actualizarTabla(this.nTabla, this.id);
  }

}
