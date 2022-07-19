import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { CadastroMunicipioComponent } from './cadastro-municipio/cadastro-municipio.component';
import { FormsModule } from '@angular/forms';
import { ListaClienteComponent } from './lista/lista-cliente/lista-cliente.component';
import { ListaMunicipioComponent } from './lista/lista-municipio/lista-municipio.component';
import { MenuAmpixComponent } from './menu-ampix/menu-ampix.component';
import { ConsultaMunicipioComponent } from './consulta-municipio/consulta-municipio.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    CadastroMunicipioComponent,
    ListaClienteComponent,
    ListaMunicipioComponent,
    MenuAmpixComponent,
    ConsultaMunicipioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
