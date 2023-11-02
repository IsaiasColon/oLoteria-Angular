import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from '../../../services/usuarios.service';
import { RolesService } from 'src/app/services/roles.service';
import { IJugador } from 'src/app/_models/jugador';
import { IRol } from 'src/app/_models/rol';

@Component({
  selector: 'app-jugadores-form',
  templateUrl: './jugadores-form.component.html',
  styleUrls: ['./jugadores-form.component.css']
})
export class JugadoresFormComponent implements OnInit {
  modoEdicion: boolean = false;
  hide = true;
  jugador: IJugador = {} as IJugador;
  formGroup: FormGroup = {} as FormGroup;
  roles: IRol[] = [];

  constructor
  (
    public dialogRef: MatDialogRef<JugadoresFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data = {} as any,
    private fb: FormBuilder,
    private _rs: RolesService,
    private _js: UsuariosService
  ) { }

  crearForm(){
    this.formGroup = this.fb.group({
      nombre: '',
      userName: '',
      correo: '',
      contra: '',
      rol: 1
    });
  }

  cargarForm(jugador: IJugador){
    this.formGroup.patchValue({
      nombre: jugador.nombre,
      userName: jugador.userName,
      correo: jugador.correo,
      contra: jugador.contra,
      rol: jugador.rol
    });
  }

  onNoClick(): void {    
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.crearForm();

    this.jugador = this.data.jugador;
    // console.log(this.jugador);
    
    this.getRoles();
    if (this.jugador == undefined) {
      return;
    }else{
      this.modoEdicion = true;
      // console.log("modo de edicion");
      this.cargarForm(this.jugador);      
    }
  }

  getRoles(){
    this._rs.gets().subscribe( roles =>{
      this.roles = roles;
      // console.log(roles);
    }, error => console.error(error));
  }

  onSubmit(){
    let jugador: IJugador = Object.assign({}, this.formGroup.value);
    // console.table(jugador);
    if (this.modoEdicion) {
      jugador.id = this.jugador.id;
      this.editarJugador(jugador);
    } else{
      this.crearJugador(jugador);
      // console.log('nada');
      this.dialogRef.close(jugador);
      
    }
    
  }

  closeDialog( jugador: any ){    
    this.dialogRef.close(jugador);
  }

  crearJugador(jugador: IJugador){
    return this._js.crearJugador(jugador).subscribe( jugador => {
      this.onSaveSuccess("se agrego un jugador");
      // console.log(jugador);
      this.jugador = jugador;
      this.closeDialog(this.jugador);
    });
  }

  editarJugador(jugador: IJugador){
    this._js.editarJugador(jugador).subscribe( jugador => {
      this.onSaveSuccess("Usuario Modificado");
    });
  }
  
  onSaveSuccess(texto: string){
    // this.router.navigate(["/roles"]);
    console.log(texto);
    
  }

}
