import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';

@Component({
  selector: 'app-pensamnto',
  templateUrl: './pensamnto.component.html',
  styleUrls: ['./pensamnto.component.css']
})
export class PensamntoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // recebe informaçõe do componente pai (listar-pensamento)
  @Input() pensamento: IPensamento = {
    id: 0,
    conteudo: "angular",
    autoria: "desconhecido",
    modelo: "modelo1"
  }

  larguraPensamento():string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamneto-g'
    } else {
      return 'pensamneto-p'
    }
  }

}
