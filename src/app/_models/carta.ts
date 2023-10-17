export interface ICarta {
    id: number;
    numero: number;
    tabla: number;
    activo: boolean;
}

export class Carta implements ICarta {
    id: number;
    numero: number;
    tabla: number;
    conFicha: boolean;
    activo: boolean;

    constructor(id:number, numero: number, tabla: number, activo:boolean){
        this.id = id;
        this.numero = numero;
        this.tabla = tabla;
        this.conFicha = false;
        this.activo = activo;
    }
}

export const Cartas = [
    { numero : 1, nombre : "El gallo" },
    { numero : 2, nombre : "El diablo" },
    { numero : 3, nombre : "La dama" },
    { numero : 4, nombre : "El catrín" },
    { numero : 5, nombre : "El paraguas" },
    { numero : 6, nombre : "La sirena" },
    { numero : 7, nombre : "La escalera" },
    { numero : 8, nombre : "La botella" },
    { numero : 9, nombre : "El barril" },
    { numero : 10, nombre : "El árbol" },
    { numero : 11, nombre : "El melón" },
    { numero : 12, nombre : "El valiente" },
    { numero : 13, nombre : "El gorrito" },
    { numero : 14, nombre : "La muerte" },
    { numero : 15, nombre : "La pera" },
    { numero : 16, nombre : "La bandera" },
    { numero : 17, nombre : "El bandolón" },
    { numero : 18, nombre : "El violoncello" },
    { numero : 19, nombre : "La garza" },
    { numero : 20, nombre : "El pájaro" },
    { numero : 21, nombre : "La mano" },
    { numero : 22, nombre : "La bota" },
    { numero : 23, nombre : "La luna" },
    { numero : 24, nombre : "El cotorro" },
    { numero : 25, nombre : "El borracho" },
    { numero : 26, nombre : "El negrito" },
    { numero : 27, nombre : "El corazón" },
    { numero : 28, nombre : "La sandía" },
    { numero : 29, nombre : "El tambor" },
    { numero : 30, nombre : "El camarón" },
    { numero : 31, nombre : "Las jaras" },
    { numero : 32, nombre : "El músico" },
    { numero : 33, nombre : "La araña" },
    { numero : 34, nombre : "El soldado" },
    { numero : 35, nombre : "La estrella" },
    { numero : 36, nombre : "El cazo" },
    { numero : 37, nombre : "El mundo" },
    { numero : 38, nombre : "El apache" },
    { numero : 39, nombre : "El nopal" },
    { numero : 40, nombre : "El alacrán" },
    { numero : 41, nombre : "La rosa" },
    { numero : 42, nombre : "La calavera" },
    { numero : 43, nombre : "La campana" },
    { numero : 44, nombre : "El cántarito" },
    { numero : 45, nombre : "El venado" },
    { numero : 46, nombre : "El sol" },
    { numero : 47, nombre : "La corona" },
    { numero : 48, nombre : "La chalupa" },
    { numero : 49, nombre : "El pino" },
    { numero : 50, nombre : "El pescado" },
    { numero : 51, nombre : "La palma" },
    { numero : 52, nombre : "La maceta" },
    { numero : 53, nombre : "El arpa" },
    { numero : 54, nombre : "La rana" }
]