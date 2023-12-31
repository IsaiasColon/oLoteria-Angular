import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import { UsuariosService } from '../../services/usuarios.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SalasService } from 'src/app/services/salas.service';
import { TablasJugadasService } from 'src/app/services/tablas-jugadas.service';
import { Carta } from 'src/app/_models/carta';
import { IJuego } from 'src/app/_models/juego';
import { ISala } from 'src/app/_models/sala';
import { ITabla, Tabla } from 'src/app/_models/tabla';
import { ITablaJugada } from '../../_models/tabla-jugada';
import { IJugador, JugadorConectado } from "../../_models/jugador";
import { EntrarSalaDialogComponent } from './components/entrar-sala-dialog/entrar-sala-dialog.component';
import { MisTablasComponent } from './components/mis-tablas/mis-tablas.component';
import { SalasFormComponent } from './salas-form/salas-form.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit, AfterViewInit {
  salas: ISala[] = [];
  jugadores: IJugador[] = [];

  displayedColumns: string[] = ['position', 'nombre', 'tipo', 'creador', 'jugadoresMin', 'jugadoresMax', 'activo', 'acciones'];
  dataSource: ISala[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as any;
  // @ViewChild(MatSort) sort: MatSort = {} as any;

  constructor(
    private _ss: SalasService,
    public dialog: MatDialog,
    private _jss: UsuariosService,
    private router: Router,
    private _js: JuegosService,
    private _tjs: TablasJugadasService,
    private localStorage: LocalStorageService
    ) { 
      
    // Create 100 users
    this.getSalas();
    }

  ngOnInit(): void {
    this.getJugadores();
    this.getSalas();
  }

  ngAfterViewInit(){
    // this.dataSource.sort = this.sort;
  }

  seleccionarTablas( sala: ISala ): void {
    const dialogRef = this.dialog.open(MisTablasComponent, {
      width: '80%',
      data: sala
    });
    dialogRef.afterClosed().subscribe((result: any[]) => {
      // console.log(result);
      if (result) {
        // var tablas: ITablaJugada[] = new result.values(){}
        // console.log('Crear juego');
        // var tablas = result.map( (t: any) => {
        //   t.cartas.split(',');
        //   return t;
        // });
        console.log(result);
        
        if (result) {
          this.localStorage.guardarTablas(result);
        }
        
        this.irSala(sala);
      }    
    });
  }

  crearJuego( sala: any ){    
    let juego: IJuego = Object.assign({ sala: sala.id });
    this._js.crearJuego( juego ).subscribe( juego => {
      console.log(juego);
    });
  }

  // crearTablaJugada(tabla: ITabla, juego: IJuego){
  //   this._tjs.crearTabla(tabla, juego).subscribe( tabla => {
  //     console.log(tabla);
      
  //   })
  // }

  irSala( sala: ISala ){
    this.router.navigate(['/salas/', sala.id]);
  }

  getSalas(){
    this._ss.gets().subscribe( (salas: ISala[]) => {
      console.log(salas);
      this.salas = salas;

      // Assign the data to the data source for the table to render
      this.dataSource = salas;
    });
  }  

  eliminarSala(sala: any){
    this._ss.eliminarSala(sala).subscribe( sala => {
      console.log(sala);
      this.getSalas();
    });
  }


  activarDesactivar( sala:any, event:any ){
    if (event) {
      this._ss.activar(sala).subscribe( sala => {
        // console.log(sala);
        
      });
    }else{
      this._ss.desactivar(sala).subscribe( sala => {
        // console.log(sala);
        
      });
    }
  }  

  getJugadores(){
    this._jss.gets().subscribe( jugadores =>{
      this.jugadores = jugadores;
      console.log(jugadores);      
    });
  }

  openDialog(sala?: ISala): void {
    const dialogRef = this.dialog.open(SalasFormComponent, {
      width: 'auto',
      data: {sala: sala}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
      console.log(result);
      
      this.getSalas();
    });
  }

  
  entrarSala( sala:any ): void {
    const dialogRef = this.dialog.open(EntrarSalaDialogComponent, {
      width: '250px',
      data: sala
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.irSala(sala);
      }    
    });
  }

}
