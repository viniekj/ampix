import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  nomeCliente: string
  codigoCliente: string
  listarClientes: Cliente[]
  mostrarCliente: Cliente


  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  findByNomeCliente(){
   this.clienteService.getClienteByNome(this.nomeCliente).subscribe((resp:Cliente[]) => {
    this.listarClientes = resp
   })
   
  }

  findByCodigoCliente(){
    this.clienteService.getClienteByCodigo(this.codigoCliente).subscribe((resp:Cliente) => {
     this.mostrarCliente = resp
    })
    
   }


}
