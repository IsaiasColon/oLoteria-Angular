import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { JuegosService } from 'src/app/services/juegos.service';
import { IJugador } from 'src/app/_models/jugador';
import { IJuego } from 'src/app/_models/juego';
import { ISala } from 'src/app/_models/sala';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-juegos-form',
  templateUrl: './juegos-form.component.html',
  styleUrls: ['./juegos-form.component.css']
})
export class JuegosFormComponent implements OnInit {

  modoEdicion: boolean = false;
  formGroup: FormGroup = {} as any;
  juego: IJuego = {} as any;
  jugadores: IJugador[] = [];
  salas: ISala[] = [];

  constructor(
    public dialogRef: MatDialogRef<JuegosFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data = {} as any,
    private fb: FormBuilder,
    private _js: JuegosService,
    private _jgs: JugadoresService,
    private _ss: SalasService,
    private router: Router,
    private activated: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.crearForm();
    this.getSalas();
    this.getJugadores();

    this.juego = this.data.juego;
    console.log(this.juego);
    
    if (this.juego == undefined) {
      return;
    }else{
      this.modoEdicion = true;
      console.log("modo de edicion");
      this.cargarForm(this.juego);      
    }
  }

  crearForm(){

    this.formGroup = this.fb.group({
      sala: '',
      ganador: '',
      fecha: new Date()
    });

  }

  cargarForm(juego: IJuego){
    this.formGroup.patchValue({
      sala: juego.Sala,
      // ganador: juego.ganador,
      fecha: juego.Fecha
    });
  }

  getSalas(){
    this._ss.gets().subscribe( salas =>{
      this.salas = salas;
      console.log(salas);      
    }, error => console.error(error));
  }

  getJugadores(){
    this._jgs.gets().subscribe( jugadores =>{
      this.jugadores = jugadores;
      console.log(jugadores);      
    }, error => console.error(error));
  }

  onSubmit(){
    let juego: IJuego = Object.assign({}, this.formGroup.value);
    console.table(juego);
    if (this.modoEdicion) {
      juego.Id = this.juego.Id ;
      this.editarJuego(juego);
    } else{
      this.crearJuego(juego);
    }
  }  

  crearJuego(juego: IJuego){
    this._js.crearJuego(juego).subscribe( juego => {
      this.onSaveSuccess();
    }, error => {
      console.error(error);
    });
  }

  editarJuego(juego: IJuego){
    this._js.editarJuego(juego).subscribe( juego => {
      this.onSaveSuccess();
    }, error => {
      console.error(error);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveSuccess(){
    // this.router.navigate(["/juegos"]);
  }

}
