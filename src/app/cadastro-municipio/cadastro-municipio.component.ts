import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Municipio } from '../model/Municipio';
import { ClienteService } from '../service/cliente.service';
import { MunicipioService } from '../service/municipio.service';

@Component({
  selector: 'app-cadastro-municipio',
  templateUrl: './cadastro-municipio.component.html',
  styleUrls: ['./cadastro-municipio.component.css']
})
export class CadastroMunicipioComponent implements OnInit {
  municipio:Municipio= new Municipio()
  constructor(
    private municipioService:MunicipioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  cadastrar(){
    this.municipioService.postMunicipio(this.municipio).subscribe((resp:Municipio) => {
      this.municipio = resp
      alert('Município cadastrado com sucesso!')
      this.municipio = new Municipio()
      this.router.navigate(['/'])
    }, erro =>{
      alert("Não foi possível cadastrar")
    }
    )
  }

}
