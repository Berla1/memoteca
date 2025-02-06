import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from '../app/components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamntoComponent } from './components/pensamentos/pensamnto/pensamnto.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentosComponent } from './components/pensamentos/excluir-pensamentos/excluir-pensamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamntoComponent,
    ExcluirPensamentosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
