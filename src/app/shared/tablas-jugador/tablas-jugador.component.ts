import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CartasService } from 'src/app/services/cartas.service';
import { Carta, ICarta } from 'src/app/_models/carta';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-tablas-jugador',
  templateUrl: './tablas-jugador.component.html',
  styleUrls: ['./tablas-jugador.component.css']
})
export class TablasJugadorComponent implements OnInit, AfterViewInit {

  @Input() seleccionada: boolean = false;
  cartasLanzadas: number[] = [];
  @Input() tabla: ITabla = {} as ITabla;
  @Input() titulo: boolean = false;

  constructor(
    private _cs: CartasService
  ) { }

  ngOnInit(): void {
    // this.tablas.forEach(tabla => {
    //   this.getCartasByTabla( tabla );  
    // });
    // console.log(this.tabla);
    
    this.getCartasByTabla( this.tabla );
    
  }

  ngAfterViewInit() {
  }

  getCartasByTabla( tabla: ITabla ) {
    // console.log(tabla);
    
    this._cs.getCartasByTabla( tabla.id ).subscribe( (cartas: Array<any>) => {
      tabla.cartas = cartas;
      if (cartas.length) {
        // console.log(cartas);
      }
      
    });
  }

  tablaSeleccionada( tabla:ITabla ){
    // console.log(tabla);
    
  }

}
