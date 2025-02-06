import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaPensamentos = [
    {
      conteudo: "angular",
      autoria: "desconhecido",
      modelo: "modelo1"
    },
    {
      conteudo: "react",
      autoria: "desconhecido",
      modelo: "modelo2"
    },
    {
      conteudo: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies ultricies, nunc nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies ultricies, nunc nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies ultricies, nunc nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies ultricies, nunc nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies ultricies, nunc nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies ultricies, nunc nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies ultricies, nunc nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies ultricies, nunc nunc. ",
      autoria: "desconhecido",
      modelo: "modelo3"
    }
  ]

  adicionarPensamento() {
    alert('Adicionar pensamento')
  }

}
