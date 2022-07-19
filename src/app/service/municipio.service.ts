import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from '../model/Municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  linkMunicipio = 'http://localhost:8080/municipios'
  constructor(private http: HttpClient) { }
  getAllMunicipio(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(this.linkMunicipio)
  }
  getMunicipioById(id:number): Observable<Municipio> {
    return this.http.get<Municipio>(this.linkMunicipio + `/${id}`)
  }
  getMunicipioByCodigo(codigo: string): Observable<Municipio> {
    return this.http.get<Municipio>(this.linkMunicipio + `/codigo/${codigo}`)
  }
  getMunicipioByNome(nome: string): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(this.linkMunicipio + `/nome/${nome}`)
  }
  getMunicipioByUf(uf: string): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(this.linkMunicipio + `/uf/${uf}`)
  }
  postMunicipio(municipio:Municipio): Observable<Municipio> {
    return this.http.post<Municipio>(this.linkMunicipio,municipio)
  }
  putMunicipio(municipio:Municipio,id:number): Observable<Municipio> {
    return this.http.put<Municipio>(this.linkMunicipio+ `/${id}`,municipio)
  }
  deleteMunicipio(id:number){
    return this.http.delete<Municipio>(this.linkMunicipio + `/${id}`)
  }
  
}
