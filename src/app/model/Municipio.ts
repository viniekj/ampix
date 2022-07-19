import { Cliente } from "./Cliente"

export class Municipio{
    public id: number
    public codigo: string
    public nome: string
    public uf: string
    public cliente: Cliente[]
}