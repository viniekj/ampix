import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Municipio } from '../model/Municipio';
import { MunicipioService } from '../service/municipio.service';

@Component({
  selector: 'app-consulta-municipio',
  templateUrl: './consulta-municipio.component.html',
  styleUrls: ['./consulta-municipio.component.css']
})
export class ConsultaMunicipioComponent implements OnInit {

  nomeMunicipio: string
  codigoMunicipio: string
  ufMunicipio: string
  listarMunicipios: Municipio[]
  mostrarMunicipio: Municipio


  constructor(
    private municipioService: MunicipioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  findByNomeMunicipio(){
   this.municipioService.getMunicipioByNome(this.nomeMunicipio).subscribe((resp:Municipio[]) => {
    this.listarMunicipios = resp
   })
  }

  findByCodigoMunicipio(){
    this.municipioService.getMunicipioByCodigo(this.codigoMunicipio).subscribe((resp:Municipio) => {
     this.mostrarMunicipio = resp
    })
  }

  findByUfMunicipio(){
    this.municipioService.getMunicipioByUf(this.ufMunicipio).subscribe((resp:Municipio[]) => {
     this.listarMunicipios = resp
    })
    
   }


}


