import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import { TablasJugadasService } from 'src/app/services/tablas-jugadas.service';
import { IJuego } from 'src/app/_models/juego';
import { ITablaJugada } from 'src/app/_models/tabla-jugada';
import { SignalRService } from "src/app/services/signal-r.service";
import { Cartas } from "../../../_models/carta";
// import { SpeechSynthesisUtteranceFactoryService, SpeechSynthesisService } from '@kamiazya/ngx-speech-synthesis';
import { SalasService } from 'src/app/services/salas.service';
import { ISala } from 'src/app/_models/sala';
import { IJugador } from 'src/app/_models/jugador';
import { LocalStorageService } from 'src/app/services/local-storage.service';

interface Carta {
  numero: number,
  name: string
}

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juego: IJuego = {} as any;
  tablas: ITablaJugada = {} as any;;
  sala: ISala = {} as any;;
  jugador: IJugador = {} as any;;
  conteo: number = 20;
  cartasLanzadas: number[] = [];

  constructor(
    private activated: ActivatedRoute,
    private _js: JuegosService,
    private _tjs: TablasJugadasService,
    private _ss: SalasService,
    private signalr: SignalRService,
    // public f: SpeechSynthesisUtteranceFactoryService,
    // public svc: SpeechSynthesisService,
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    
    this.jugador = this.localStorage.obtenerUsuarioConectado() as IJugador;
    this.activated.params.subscribe(params => {
      console.log(params['id']);
      this.getJuego(params['id']);
      this.getTablasJugadas(params['id']);
    });
    
    
    this.signalr.emNotificaCarta.subscribe( (carta: Carta) =>{
      console.log(carta);
      // carta.name = Cartas.find(x=>x.numero == carta.numero).nombre;
        this.cartasLanzadas.push(carta.numero);
        this.speechCarta(carta.name);
        // if (this.cartasLanzadas.length > 25) {
        //   this.verJugadas();
        // }

    });
  }

  getJuego(id: number){
    this._js.getJuego(id).subscribe( (juego: IJuego) => {
      console.log(juego);
      this.juego = juego;
      this.getSala(juego.Sala);
    });
  }

  getTablasJugadas(id: number){
    this._tjs.getJugadas(id).subscribe( (tablas: any) => {
      console.log(tablas);
      this.tablas = tablas;
    })
  }

  getSala( id: number) {
    this._ss.getSala( id ).subscribe( (sala: ISala) => {
      this.sala = sala;
      console.log(sala);
      
    });
  }



  LanzarCarta(){
    var carta: Carta = {numero: 0, name: ""};
    while(true){
      carta.numero = Math.floor(Math.random() * (55 - 1)) + 1;
      if (!this.cartasLanzadas.includes(carta.numero)) {
        carta.name = Cartas.find( x => x.numero == carta.numero)?.nombre || '';
        this.signalr.enviarCarta(carta);
        // this.cartasLanzadas.push(carta.numero);
        // this.speechCarta(carta.name);
        // if (this.cartasLanzadas.length > 25) {
        //   this.verJugadas();
        // }
        break;
      }
    }
  }

  speechCarta(carta: any) {
    // const v = this.f.text(carta);
    // this.svc.speak(this.f.text(carta));
  }
}
