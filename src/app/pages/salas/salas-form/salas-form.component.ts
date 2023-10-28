import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { SalasService } from 'src/app/services/salas.service';
import { IJugador } from 'src/app/_models/jugador';
import { ISala, Tipos } from 'src/app/_models/sala';

@Component({
  selector: 'app-salas-form',
  templateUrl: './salas-form.component.html',
  styleUrls: ['./salas-form.component.css']
})
export class SalasFormComponent implements OnInit {

  modoEdicion: boolean = false;
  formGroup: FormGroup = {} as FormGroup;
  sala: ISala = {} as ISala;
  jugadores: IJugador[] = [];
  tipos = Tipos;

  constructor(
    public dialogRef: MatDialogRef<SalasFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data = {} as any,
    private fb: FormBuilder,
    private _ss: SalasService,
    private router: Router,
    private activated: ActivatedRoute,
    private _js: JugadoresService) { }

  ngOnInit(): void {
    this.crearForm();
    this.getJugadores();

    this.sala = this.data.sala;
    console.log(this.sala);
    
    if (this.sala == undefined) {
      return;
    }else{
      this.modoEdicion = true;
      console.log("modo de edicion");
      this.cargarForm(this.sala);      
    }
  }

  crearForm(){

    this.formGroup = this.fb.group({
      nombre: '',
      tipo: '',
      jugadoresMin: 2,
      jugadoresMax: 10,
      protegida: true,
      contra: '',
      creador: ''
    });

  }

  cargarForm(sala: ISala){
    this.formGroup.patchValue({
      nombre: sala.nombre,
      tipo: sala.tipo,
      jugadoresMin: sala.jugadorMin,
      jugadoresMax: sala.jugadorMax,
      protegida: sala.protegida,
      contra: sala.contra,
      creador: sala.creador
    });
  }

  getJugadores(){
    this._js.gets().subscribe( jugadores =>{
      this.jugadores = jugadores;
      console.log(jugadores);      
    }, error => console.error(error));
  }

  onSubmit(){
    let sala: ISala = Object.assign({}, this.formGroup.value);
    console.table(sala);
    if (this.modoEdicion) {
      sala.id = this.sala.id;
      this.editarSala(sala);
    } else{
      this.crearSala(sala);
    }
  }  

  crearSala(sala: ISala){
    this._ss.crearSala(sala).subscribe( sala => {
      this.onSaveSuccess();
    }, error => {
      console.error(error);
    });
  }

  editarSala(sala: ISala){
    this._ss.editarSala(sala).subscribe( sala => {
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
