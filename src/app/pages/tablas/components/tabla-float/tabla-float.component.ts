import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';
import { Cartas, ICarta } from 'src/app/_models/carta';

@Component({
  selector: 'app-tabla-float',
  templateUrl: './tabla-float.component.html',
  styleUrls: ['./tabla-float.component.css']
})
export class TablaFloatComponent implements OnInit, OnChanges{

  @Input() Cartas: any[] = [];
  nTabla: any[] = [];
  @Output() tablaCambiada: EventEmitter<any>;

  // @Input() row0: any[] = [1,2,3,4];
  // @Input() row1: any[] = [5,6,7,8];
  // @Input() row2: any[] = [9,10,11,12];
  // @Input() row3: any[] = [13,14,15,16];
  @Input() row0: any[] = [];
  @Input() row1: any[] = [];
  @Input() row2: any[] = [];
  @Input() row3: any[] = [];

  constructor() {
    this.tablaCambiada = new EventEmitter();
   }

  ngOnInit(): void {
      // this.crearMatriz(this.Cartas);
      console.log(this.Cartas);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['Cartas'].previousValue != changes['Cartas'].currentValue) {
      this.crearMatriz(changes['Cartas'].currentValue);
      console.log("Las cartas cambiaron");            
    }
  }

  public crearMatriz(cartas: Array<any>){
    // this.row0 = null;
    this.row0 = cartas.slice(0,4);
    // this.row1 = null;
    this.row1 = cartas.slice(4,8);
    // this.row2 = null;
    this.row2 = cartas.slice(8,12);
    // this.row3 = null;
    this.row3 = cartas.slice(12,16);
    
    // this.row0.splice(0, this.row0.length, cartas.slice(0,4));
    // this.row1.splice(0, this.row0.length, cartas.slice(4,8));
    // this.row2.splice(0, this.row0.length, cartas.slice(8,12));
    // this.row3.splice(0, this.row0.length, cartas.slice(12,16));

    // cartas.slice(0,4).forEach(carta => {
    //   this.row0.splice(0, this.row0.length ,carta);
    // });
    // cartas.slice(4,8).forEach(carta => {
    //   this.row1.splice(0, this.row1.length ,carta);
    // });
    // cartas.slice(8,12).forEach(carta => {
    //   this.row2.splice(0, this.row2.length ,carta);
    // });
    // cartas.slice(12,16).forEach(carta => {
    //   this.row3.splice(0, this.row3.length ,carta);
    // });  
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.row0, event.previousIndex, event.currentIndex);
  }

  drop2(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.row1, event.previousIndex, event.currentIndex);
  }

  dropGroup(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      if (event.currentIndex > 3) {
        event.currentIndex = 3;
      }
      var afect = event.container.data[event.currentIndex];
      // console.log(afect);
      event.container.data.splice(event.currentIndex, 1);
      // console.log(event.container.data);

      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      // console.log(event.container.data);

      // transferArrayItem(event.container.data,
      //                   event.previousContainer.data,
      //                   event.currentIndex,
      //                   event.previousIndex);

      event.previousContainer.data.splice(event.previousIndex, 0, afect);
    }
    this.emitirTabla();
  }

  valor(valor:any){
    console.log(valor);
    valor.conFicha = !valor.conFicha;
  }

  emitirTabla(){
    console.log(this.Cartas);
    this.nTabla = this.row0.concat(this.row1, this.row2, this.row3);
    this.tablaCambiada.emit(this.nTabla);
  }

}
