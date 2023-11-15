import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IJugador } from 'src/app/_models/jugador';
import { HubsService } from 'src/app/services/hubs.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SignalRService } from 'src/app/services/signal-r.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  
  jugadores: IJugador[] = [];
  jugador: IJugador = {} as IJugador;
  sala: string = "";

  feed: string[] = [];
  allFeedSubscription: any;

  constructor(
    // private signalrService: SignalRService,
    private localStorage: LocalStorageService,
    private hubsService: HubsService,
    private activatedRoute: ActivatedRoute
    ){
      var myUser = localStorage.obtenerUsuarioConectado() as IJugador;
      this.jugadores.push(myUser);
      // this.signalrService.emNotificaJugadores.subscribe( (jugadores: IJugador[]) => {
      //   console.log(jugadores);
      //   if (this.jugadores != jugadores) {
      //     this.jugadores = jugadores;
      //   }
        
      //   signalrService.actualizaJugadores(this.jugadores);
      // });

      // signalrService.actualizaJugadores(this.jugadores);
      var idSala: number = 0;
      if (this.activatedRoute.snapshot.params["id"] > 0) {
        idSala = this.activatedRoute.snapshot.params['id'];
      }

      console.log({myUser, idSala});
      
      // this.jugador = this.localStorage.obtenerUsuarioConectado() as IJugador;
      // this.hubsService.entrarEnSala(idSala, myUser.userName, myUser.id, 'Al entrar a sala');
  }

  ngOnInit(): void {
    // 1 - start a connection
    this.sala = this.activatedRoute.snapshot.params['id'];
    this.hubsService.startConnection().then(() => {
      console.log("connected");
      // this.hubsService.listenToSalas();
      // this.hubsService.entrarEnSala(3, "", 3, "");
      
      this.hubsService.addToGroup(`${this.sala}`);

    });

    this.hubsService.ShowWho();
      // 3 - subscribe to messages received
      this.allFeedSubscription = this.hubsService.AllFeedObservable
      .subscribe((res) => {
        this.feed.push(res);
        console.log(this.feed);
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.hubsService.limpiarGrupo();
    this.hubsService.removeFromGroup(this.sala);
    
  }

}
