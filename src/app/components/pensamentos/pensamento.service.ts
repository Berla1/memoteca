import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "http://localhost:3000/pensamentos";

  constructor(private http: HttpClient) { }

  listar(): Observable<IPensamento[]> {
    return this.http.get<IPensamento[]>(this.API);
  }

  criar(pensamento: IPensamento): Observable<IPensamento>{
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<IPensamento>{
    return this.http.delete<IPensamento>(`${this.API}/${id}`);
  }

  buscarPorId(id: number): Observable<IPensamento>{
    return this.http.get<IPensamento>(`${this.API}/${id}`);
  }

  editar(pensamento: IPensamento): Observable<IPensamento>{
    return this.http.put<IPensamento>(`${this.API}/${pensamento.id}`, pensamento) 
  }

}
