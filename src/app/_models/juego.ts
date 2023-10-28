import { Carta } from "./carta";

export interface IJuego {    
    Id: number;
    Sala: number;
    // Ganador?: number;
    Fecha: Date;
    Activo: boolean;
}

export class Juego implements IJuego { 
    Id: number;
    Sala: number;
    // Ganador?: number;
    Fecha: Date;
    Activo: boolean;

    Esperando: boolean;
    // TablaGanadora?: number;
    // Cartas: Array<number>;

    constructor(juego: IJuego){
        this.Id = juego.Id;
        this.Sala = juego.Sala;
        this.Fecha = juego.Fecha;
        this.Activo = juego.Activo;
        this.Esperando = true;
        // this.Cartas = [];
    }
}