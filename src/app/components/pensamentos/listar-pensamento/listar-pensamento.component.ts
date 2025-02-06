import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaPensamentos: IPensamento[] = []

  adicionarPensamento() {
    alert('Adicionar pensamento')
  }

}
