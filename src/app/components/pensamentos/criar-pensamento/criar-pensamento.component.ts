import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: IPensamento = {
    id: 1,
    conteudo: "",
    autoria: '',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Pensamento criado com sucesso!");
  }

  cancelarPensamento(){
    alert("Pensamento cancelado com sucesso!");
  }

}
