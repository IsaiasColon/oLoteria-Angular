// import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsuariosService } from '../../services/usuarios.service';
import { IJugador, JugadorConectado } from '../../_models/jugador';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginService } from "../../services/login.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { SignalRService } from 'src/app/services/signal-r.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public usuario: IJugador = JugadorConectado;

  constructor(
    public dialog: MatDialog,
    private _ls: LoginService,
    private localStorage: LocalStorageService,
    private signalrService: SignalRService
    ) {}

  ngOnInit(): void {
    if (!this.usuario) {
      this.isLogin();
    }
  }

  isLogin(){
    this.usuario = this.localStorage.obtenerUsuarioConectado() as IJugador;
    if (this.usuario) {
      // console.log(this.usuario);      
    }
  }

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result);
      if (result) {
        this.login(result);        
      }
    });
  }

  login(userName: any){
    this._ls.login(userName).subscribe( (user:IJugador) => {
      this.usuario = user;
      if (this.usuario) {
        this.localStorage.guardarUsuarioConectado(user);
        console.log(user);
        this.signalrService.prueba(user);
      }
    });
  }

  logout(userName: any){
    this.localStorage.borrarUsuarioConectado();
    this.usuario = userName;    
  }

}
