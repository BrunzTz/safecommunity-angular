export interface Ajudas {
    categoria_nome: string;
    comentario: string;
    id_ajuda: number;
    id_usuario_auxiliado: number;
    status: string;
    subcategoria_nome: string;
    telefone_pessoa_auxiliada:string;
}

export const STATUS: any = [
    { nome: "Solicitado", valor: 1},
    { nome: "Em Andamento", valor: 2},
    { nome: "Finalizado", valor: 3},
]