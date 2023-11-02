import { Tabla } from "./tabla";

export interface IJugador {
    id: number;
    nombre: string;
    userName: string;
    correo: string;
    contra: string;
    rol: number;
    activo: boolean;
}

export class Jugador implements IJugador{    
    id: number;
    nombre: string;
    userName: string;
    correo: string;
    contra: string;
    rol: number;
    activo: boolean;

    tablas: Array<Tabla>;

    constructor(id: number, nombre: string, userName: string, correo: string, contra: string, rol: number, activo: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.userName = userName;
        this.correo = correo;
        this.contra = contra;
        this.rol = rol;
        this.activo = activo;
        this.tablas = [];
    }

}

export var JugadorConectado: IJugador;

// export class JugadorConectado {
//     jugador: IJugador;
//     tablas: ITabla[];
// }