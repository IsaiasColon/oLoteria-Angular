import { Carta, ICarta } from "./carta";

export interface ITabla {
    id: number;
    nombre: string;
    jugador: number;
    activa: boolean;

    cartas: Array<Carta>
}

export class Tabla {
    id: number;
    nombre: string;
    cartas: Array<Carta>;
    jugador: number;
    seleccionada: boolean;

    constructor(id: number, nombre: string, cartas: Array<Carta>, jugador: number, seleccionada: boolean = false){
        this.id = id;
        this.nombre = nombre;
        this.cartas = cartas;
        this.jugador = jugador;
        this.seleccionada = seleccionada;
    }
}