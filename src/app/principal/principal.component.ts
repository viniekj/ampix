import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';
import { Municipio } from '../model/Municipio';
import { ClienteService } from '../service/cliente.service';
import { MunicipioService } from '../service/municipio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  cliente: Cliente = new Cliente
  municipio: Municipio = new Municipio
  listaMunicipios: Municipio[]
  idMunicipio: number

  constructor(
    private clienteService:ClienteService,
    private router: Router,
    private municipioService:MunicipioService
  ) { }

  ngOnInit(){
    this.getAllMunicipio()
  }
 
  cadastrar(){
    this.municipio.id = this.idMunicipio
    this.cliente.municipio = this.municipio
    this.clienteService.postCliente(this.cliente).subscribe((resp:Cliente) => {
      this.cliente = resp
      alert('Cliente cadastrado com sucesso!')
      
      this.cliente = new Cliente()
      this.router.navigate(['/tabela'])
    }, erro =>{
      console.log(this.cliente.id)
      console.log(this.cliente.nome)
      console.log(this.cliente.codigo)
      console.log(this.cliente.bairro)
      alert("Não foi possível cadastrar")
    }
    )
  }

  findByIdMunicipio() {
    this.municipioService.getMunicipioById(this.idMunicipio).subscribe((resp:Municipio) => {
      this.municipio= resp
  })
  }

  
   getAllMunicipio() {
    this.municipioService.getAllMunicipio().subscribe((resp: Municipio[]) => {
      this.listaMunicipios = resp
    })
  }
  
}
