import { Component } from '@angular/core';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { RolesService } from 'src/app/services/roles.service';
import { SalasService } from 'src/app/services/salas.service';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    public rolesService: RolesService,
    public jugadoresService: JugadoresService,
    public tablasService: TablasService,
    public salasService: SalasService
    ) {
    let roles = rolesService.gets().subscribe(resp => {
      console.log(resp);
    });

    let jugadores = jugadoresService.gets().subscribe(resp => {
      console.log(resp);
    });

    let tablas = tablasService.gets().subscribe(resp => {
      console.log(resp);
    });

  }

}
