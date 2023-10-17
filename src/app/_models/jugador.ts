export interface IJugador {
    id: number;
    nombre: string;
    nickName: string;
    correo: string;
    contra: string;
    rol: number;
    activo: boolean;
}


export var JugadorConectado: IJugador;

// export class JugadorConectado {
//     jugador: IJugador;
//     tablas: ITabla[];
// }