import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { TablasService } from 'src/app/services/tablas.service';
import { ISala } from 'src/app/_models/sala';
import { ITabla, Tabla } from 'src/app/_models/tabla';
import { TablaComponent } from "src/app/shared/tabla/tabla.component";
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-mis-tablas',
  templateUrl: './mis-tablas.component.html',
  styleUrls: ['./mis-tablas.component.css']
})
export class MisTablasComponent implements OnInit, AfterViewInit{

  cartasLanzadas: number[] = [];
  sala: ISala = {} as any;
  tablas: any[] = [];
  tablasSeleccionadas: Tabla[] = [];

  constructor(
    public dialogRef: MatDialogRef<MisTablasComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any = {} as any,
    private _ts: TablasService,
    private _ls: LoginService,
    private localStorage: LocalStorageService
    ) {}

  ngOnInit() {
      this.sala = this.data;
      const user = this.localStorage.obtenerUsuarioConectado();
      // console.log(user);
      if (user != null) {
        this.getMisTablas( user.id );        
      }
  }

  ngAfterViewInit() {
    
  }

  tablaSeleccionada( tabla: Tabla ){
    if (this.tablasSeleccionadas.includes( tabla )) {
      tabla.seleccionada = false;
      this.tablasSeleccionadas.splice(this.tablasSeleccionadas.indexOf(tabla), 1);
    } else{
      tabla.seleccionada = true;
      this.tablasSeleccionadas.push(tabla);
    }
    // console.log(this.tablasSeleccionadas);
  }

  getMisTablas( userId: any) {
    this._ts.getsByJugador( userId ).subscribe( (tablas: Array<ITabla>) => {
      this.tablas = tablas.map((t) => new Tabla(t.id, t.nombre, t.cartas, t.jugador, false) );
      // console.log(tablas);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  entrar() {
    this.dialogRef.close( this.tablasSeleccionadas );
  }

}
