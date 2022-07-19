import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  linkCliente = 'http://localhost:8080/clientes'
  constructor(private http: HttpClient) { }
  getAllCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.linkCliente)
  }
  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.linkCliente + `/${id}`)
  }
  getClienteByCodigo(codigo: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.linkCliente + `/codigo/${codigo}`)
  }
  getClienteByNome(nome: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.linkCliente + `/nome/${nome}`)
  }
  postCliente(cliente:Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.linkCliente,cliente)
  }
  putCliente(cliente:Cliente,id:number): Observable<Cliente> {
    return this.http.put<Cliente>(this.linkCliente + `/${id}`,cliente)
  }
  deleteCliente(id:number){
    return this.http.delete<Cliente>(this.linkCliente + `/${id}`)
  }
}