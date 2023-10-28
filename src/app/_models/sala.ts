export interface ISala {
    id: number;
    nombre: string;
    tipo: string;
    creador: number;
    protegida: boolean;
    contra: string;
    jugadorMin: number;
    jugadorMax: number;
    activo: boolean;
}

export class Sala implements ISala {
    id: number;
    nombre: string;
    tipo: string;
    creador: number;
    protegida: boolean;
    contra: string;
    jugadorMin: number;
    jugadorMax: number;
    activo: boolean;

    constructor( sala: ISala){
        this.id = sala.id;
        this.nombre = sala.nombre;
        this.tipo = sala.tipo;
        this.creador = sala.creador;
        this.protegida = sala.protegida;
        this.contra = sala.contra;
        this.jugadorMin = sala.jugadorMin;
        this.jugadorMax = sala.jugadorMax;
        this.activo = sala.activo;
    }

}

export const Tipos = [
    { nombre: "clasico" },
    { nombre: "express" },
    { nombre: "moderna" }
]