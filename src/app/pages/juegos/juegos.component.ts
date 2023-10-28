import { Component, OnInit } from '@angular/core';
import { JuegosService } from "../../services/juegos.service";
import { IJuego } from 'src/app/_models/juego';
import { MatDialog } from '@angular/material/dialog';
import { JuegosFormComponent } from './juegos-form/juegos-form.component';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  juegos: IJuego[] = [];
  displayedColumns: string[] = ['position', 'sala', 'ganador', 'fecha', 'activo', 'acciones'];

  constructor( 
    private _js: JuegosService,
    public dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos(){
    this._js.gets().subscribe( (juegos: any[]) => {
      console.log(juegos);      
      this.juegos = juegos;
    });
  }

  activarDesactivar( juego: any, event: any){
    console.log(juego);
    console.log(event); 
    if (event) {
      this._js.activar(juego).subscribe( juego => {
        console.log(juego);
        
      });
    }else{
      this._js.desactivar(juego).subscribe( juego => {
        console.log(juego);
        
      });
    }
  }

  eliminarJuego(id: number){
    this._js.eliminarJuego(id).subscribe( juego => {
      console.log(juego);
      this.getJuegos();
    });
  }

  openDialog(juego?: IJuego): void {
    const dialogRef = this.dialog.open(JuegosFormComponent, {
      width: 'auto',
      data: {juego: juego}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
      console.log(result); // Hacer que se agregue desde aqui y no del Dialog
      // this.juegos.find(x => x.id == result.id).nombre = result.nombre;
      this.getJuegos();
    });
  }

}
