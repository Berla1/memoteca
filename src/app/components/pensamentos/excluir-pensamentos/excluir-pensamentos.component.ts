import { ActivatedRoute, Router } from '@angular/router';
import { IPensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css'],
})
export class ExcluirPensamentosComponent implements OnInit {
  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: PensamentoService,
    private Router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamentos() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id!).subscribe(() => {
        this.Router.navigate(['/']);
      });
    }
  }

  cancelarPensamento() {
    this.Router.navigate(['/']);
  }
}
