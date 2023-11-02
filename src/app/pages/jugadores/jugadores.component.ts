import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from '../../services/usuarios.service';
import { RolesService } from 'src/app/services/roles.service';
import { IRol } from 'src/app/_models/rol';
import { IJugador } from "../../_models/jugador";
import { JugadoresFormComponent } from './jugadores-form/jugadores-form.component';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  jugadores: IJugador[] = [];
  roles: IRol[] = [];

  displayedColumns: string[] = ['position', 'nombre', 'userName', 'correo', 'rol', 'activo', 'acciones'];

  constructor( private _js: UsuariosService,
    public dialog: MatDialog,
    private _rs: RolesService ) { }

  ngOnInit(): void {
    this.getRoles();
    this.getJugadores();
  }

  getJugadores(){
    this._js.gets().subscribe( (jugadores: IJugador[]) => {
      console.log(jugadores);
      this.jugadores = [];
      this.jugadores = jugadores;
    }, error => {
      console.log(error);
      
    });
  }  

  eliminarJugador(jugador: any){
    this._js.eliminarJugador(jugador).subscribe( (jugador: IJugador) => {
      console.log(jugador);
      this.getJugadores();
    }, error => console.error(error));
  }


  activarDesactivar( jugador: any, event: any ){
    if (event) {
      this._js.activar(jugador).subscribe( jugador => {
        // console.log(jugador);
        
      }, error => console.error(error));
    }else{
      this._js.desactivar(jugador).subscribe( jugador => {
        // console.log(jugador);
        
      }, error => console.error(error));
    }
  }  

  getRoles(){
    this._rs.gets().subscribe( (roles: IRol[]) =>{
      this.roles = roles;
      // console.log(roles);
    }, error => console.error(error));
  }

  openDialog(jugador?: IJugador): void {
    const dialogRef = this.dialog.open(JugadoresFormComponent, {
      width: 'auto',
      data: {jugador: jugador }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.getJugadores();
      }
      
    });
  }

}
