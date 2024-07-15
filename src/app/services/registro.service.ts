import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../pessoa';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'YOUR_API_URL_HERE';

  constructor(private http: HttpClient) { }

  cadastrar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.apiUrl}/pessoas`, pessoa);
  }

  atualizar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}/pessoas/${pessoa.id}`, pessoa);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/pessoas/${id}`);
  }

  listar(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.apiUrl}/pessoas`);
  }
}
