export interface Ajudas {
    categoria_nome: string;
    comentario: string;
    id_ajuda: number;
    id_usuario_auxiliado: number;
    status: string;
    subcategoria_nome: string;
}

export const STATUS: any = [
    { nome: "UM", valor: 1},
    { nome: "DOIS", valor: 2},
    { nome: "TRÊS", valor: 3},
]