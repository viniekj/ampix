import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  cliente: Cliente = new Cliente()
  listaClientes: Cliente[]
  
  constructor(
    private clienteService:ClienteService
  ) {}
  
  ngOnInit(){
    this.getAllCliente()
  }
 
  getAllCliente() {
    this.clienteService.getAllCliente().subscribe((resp: Cliente[]) => {
      this.listaClientes = resp
    })
  }
}
