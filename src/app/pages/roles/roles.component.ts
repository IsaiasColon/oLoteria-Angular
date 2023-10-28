import { Component, OnInit } from '@angular/core';
import { RolesService } from "../../services/roles.service";
import { IRol } from 'src/app/_models/rol';
import { RolesFormComponent } from './roles-form/roles-form.component';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: IRol[] = [];

  displayedColumns: string[] = ['position', 'nombre', 'activo', 'acciones'];

  constructor( 
    private _rs: RolesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(){
    // this._rs.gets().subscribe( roles => {
    //   console.log(roles.length);      
    //   this.roles = roles;
    // }, error => {
    //   console.log(error);
      
    // });

    of(this._rs.gets()).subscribe({
      next: (v) => {
        v.subscribe( roles =>{
          console.log(roles.length);      
          this.roles = roles;         
        })
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete') 
    });
  }

  activarDesactivar( rol: any, event: any ){
    console.log(rol);
    console.log(event); 
    if (event) {
      this._rs.activar(rol).subscribe( rol => {
        console.log(rol);
        
      }, error => console.error(error));
    }else{
      this._rs.desactivar(rol).subscribe( rol => {
        console.log(rol);
        
      }, error => console.error(error));
    }
  }

  eliminarRol(id:number){
    this._rs.eliminarRol(id).subscribe( rol => {
      console.log(rol);
      this.getRoles();
    }, error => console.error(error));
  }

  openDialog(rol?: IRol): void {
    const dialogRef = this.dialog.open(RolesFormComponent, {
      width: 'auto',
      data: {rol: rol}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
      console.log(result);
      // this.roles.find(x => x.id == result.id).nombre = result.nombre;
      this.getRoles();
    });
  }

}
