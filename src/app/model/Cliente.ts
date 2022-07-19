import { Municipio } from "./Municipio"

export class Cliente{
    public id: number
    public codigo: string
    public nome: string
    public endereco: string
    public numero: string
    public bairro: string
    public cep: number
    public municipio: Municipio
}