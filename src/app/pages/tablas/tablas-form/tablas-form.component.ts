import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { TablasService } from 'src/app/services/tablas.service';
import { IJugador } from 'src/app/_models/jugador';
import { ITabla } from 'src/app/_models/tabla';

@Component({
  selector: 'app-tablas-form',
  templateUrl: './tablas-form.component.html',
  styleUrls: ['./tablas-form.component.css']
})
export class TablasFormComponent implements OnInit {

  modoEdicion: boolean = false;
  formGroup: FormGroup = {} as FormGroup;
  tabla: ITabla = {} as ITabla;
  jugadores: IJugador[] = [];

  constructor(
    public dialogRef: MatDialogRef<TablasFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data = {} as any,
    private fb: FormBuilder,
    private _ts: TablasService,
    private router: Router,
    private activated: ActivatedRoute,
    private _js: JugadoresService) { }

  ngOnInit(): void {
    this.crearForm();
    this.getJugadores();

    this.tabla = this.data.tabla;
    console.log(this.tabla);
    
    if (this.tabla == undefined) {
      return;
    }else{
      this.modoEdicion = true;
      console.log("modo de edicion");
      this.cargarForm(this.tabla);      
    }
  }

  crearForm(){

    this.formGroup = this.fb.group({
      nombre: '',
      jugador: ''
    });

  }

  cargarForm(tabla: ITabla){
    this.formGroup.patchValue({
      nombre: tabla.nombre,
      jugador: tabla.jugador
    });
  }

  getJugadores(){
    this._js.gets().subscribe( jugadores =>{
      this.jugadores = jugadores;
      console.log(jugadores);      
    }, error => console.error(error));
  }

  onSubmit(){
    let tabla: ITabla = Object.assign({}, this.formGroup.value);
    console.table(tabla);
    if (this.modoEdicion) {
      tabla.id = this.tabla.id;
      this.editarTabla(tabla);
    } else{
      this.crearTabla(tabla);
    }
  }  

  crearTabla(tabla: ITabla){
    this._ts.crearTabla(tabla).subscribe( tabla => {
      this.onSaveSuccess();
    }, error => {
      console.error(error);
    });
  }

  editarTabla(tabla: ITabla){
    this._ts.editarTabla(tabla).subscribe( tabla => {
      this.onSaveSuccess();
    }, error => {
      console.error(error);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveSuccess(){
    // this.router.navigate(["/tablas"]);
  }

}
