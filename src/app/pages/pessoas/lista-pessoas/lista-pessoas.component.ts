import { Component, OnInit } from '@angular/core'; 
import { RegistroService } from 'src/app/services/registro.service';
import {  } from 'src/app/pessoa';

interface Pessoa {
  id: number;
  name: string;
  role: string;
  age: number;
  email: string;
  isActive: boolean;
  country: string;
  experience: string;
}
@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  pessoas: Pessoa[] = []; 

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void { 
    this.registroService.busca().subscribe(
      (result: Pessoa[]) => {
        this.pessoas = result; 
      },
      (error) => {
        console.error(error); 
      }
    );
  }
}
