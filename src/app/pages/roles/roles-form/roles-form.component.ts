import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles.service';
import { IRol } from 'src/app/_models/rol';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css']
})
export class RolesFormComponent implements OnInit {

  modoEdicion: boolean = false;
  formGroup: FormGroup = {} as FormGroup;
  rol: IRol = {} as any;

  constructor(
    public dialogRef: MatDialogRef<RolesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data = {} as any,
    private fb: FormBuilder,
    private _rs: RolesService,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.crearForm();

    this.rol = this.data.rol;
    console.log(this.rol);
    
    if (this.rol == undefined) {
      return;
    }else{
      this.modoEdicion = true;
      console.log("modo de edicion");
      this.cargarForm(this.rol);      
    }
  }

  crearForm(){

    this.formGroup = this.fb.group({
      nombre: ''
    });

  }

  cargarForm(rol: IRol){
    this.formGroup.patchValue({
      nombre: rol.nombre
    });
  }

  onSubmit(){
    let rol: IRol = Object.assign({}, this.formGroup.value);
    console.table(rol);
    if (this.modoEdicion) {
      rol.id = this.rol.id;
      this.editarRol(rol);
    } else{
      this.crearRol(rol);
    }
  }  

  crearRol(rol: IRol){
    this._rs.crearRol(rol).subscribe( rol => {
      this.onSaveSuccess();
    }, error => {
      console.error(error);
    });
  }

  editarRol(rol: IRol){
    this._rs.editarRol(rol).subscribe( rol => {
      this.onSaveSuccess();
    }, error => {
      console.error(error);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveSuccess(){
    // this.router.navigate(["/roles"]);
  }

}
