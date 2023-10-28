import { Component, OnInit } from '@angular/core';
import { TablasService } from "../../services/tablas.service";
import { ITabla } from 'src/app/_models/tabla';
import { MatDialog } from '@angular/material/dialog';
import { TablasFormComponent } from './tablas-form/tablas-form.component';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  tablas: ITabla[] = [];
  displayedColumns: string[] = ['position', 'nombre', 'jugador', 'activo', 'acciones'];

  constructor( 
    private _ts: TablasService,
    public dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.getTablas();
  }

  getTablas(){
    this._ts.gets().subscribe( tablas => {
      console.log(tablas);      
      this.tablas = tablas;
    }, error => {
      console.log(error);
      
    });
  }

  activarDesactivar( tabla: any, event: any){
    console.log(tabla);
    console.log(event); 
    if (event) {
      this._ts.activar(tabla).subscribe( tabla => {
        console.log(tabla);
        
      }, error => console.error(error));
    }else{
      this._ts.desactivar(tabla).subscribe( tabla => {
        console.log(tabla);
        
      }, error => console.error(error));
    }
  }

  eliminarTabla(id: number){
    this._ts.eliminarTabla(id).subscribe( tabla => {
      console.log(tabla);
      // this.getTablas();
    });
  }

  openDialog(tabla?: ITabla): void {
    const dialogRef = this.dialog.open(TablasFormComponent, {
      width: 'auto',
      data: {tabla: tabla}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
      console.log(result); // Hacer que se agregue desde aqui y no del Dialog
      // this.tablas.find(x => x.id == result.id).nombre = result.nombre;
      this.getTablas();
    });
  }

}
