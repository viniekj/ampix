import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroMunicipioComponent } from './cadastro-municipio/cadastro-municipio.component';
import { ConsultaMunicipioComponent } from './consulta-municipio/consulta-municipio.component';
import { ListaClienteComponent } from './lista/lista-cliente/lista-cliente.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path: '', redirectTo:'tabela', pathMatch: 'full'},
  {path:'cadastrar', component:PrincipalComponent},
  {path:'cadastroMunicipio', component:CadastroMunicipioComponent},
  {path:'consultaCliente', component:LoginComponent},
  {path:'consultaMunicipio', component:ConsultaMunicipioComponent},
  {path:'tabela', component:ListaClienteComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
