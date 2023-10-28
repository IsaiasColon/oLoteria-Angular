import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { IJugador } from '../../../_models/jugador';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  id: number = 0;
  jugador: IJugador = {} as IJugador;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private _js: JugadoresService
  ) { }

  ngOnInit(): void {
    console.log('Cargo Jugador');
    this.getID();    
    this.getJugador(this.id);
  }

  getID() {
    return this.activated.params.subscribe( param => {
      console.log(param['id']);
      this.id = param['id'];
      return param['id'];
    });
  }

  getJugador(id: any) {
    this._js.getJugador(id).subscribe( (jugador: any ) => {
      console.log(jugador);
      this.jugador = jugador;
      return jugador;
    });
  }

}
