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

export const Tipos = [
    { nombre: "clasico" },
    { nombre: "express" },
    { nombre: "moderna" }
]