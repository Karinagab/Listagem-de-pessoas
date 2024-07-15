import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../pessoa';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  api = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  cadastrar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.api}/cadastrar`, pessoa);
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.api}/registro/${pessoa.id}`, pessoa);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/registro/${id}`);
  }

  listar() {
    return this.http.get(this.api);
  }
}
