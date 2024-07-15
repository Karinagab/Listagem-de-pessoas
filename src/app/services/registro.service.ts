import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../pessoa';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  api = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  busca(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.api);
  }
  cadastrar(profile: any) {
    return this.http.post<any>(this.api, profile);
  
}
}