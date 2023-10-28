import { Carta, ICarta } from "./carta";

export interface ITabla {
    id: number;
    nombre: string;
    jugador: number;
    cartas: any[];
    activo: boolean;
}

export class Tabla implements ITabla {
    id: number;
    nombre: string;
    jugador: number;
    activo: boolean;

    cartas: Array<IC>;
    seleccionada: boolean;

    constructor(id: number, nombre: string, cartas: Array<number>, jugador: number, activo: boolean = false){
        this.id = id;
        this.nombre = nombre;
        this.cartas = cartas.map( c => new IC(c));
        this.jugador = jugador;
        this.seleccionada = false;
        this.activo = activo;
    }
}

export class IC {
    numero: number;
    conFicha: boolean;

    constructor(numero: number){
        this.numero = numero;
        this.conFicha = false;
    }
}