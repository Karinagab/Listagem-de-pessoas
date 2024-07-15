import { Component, Input, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';
import { Pessoa } from 'src/app/pessoa';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class PessoasListComponent implements OnInit {
 @Input() pessoas: Pessoa[] = [];

  constructor(private registroService: RegistroService, private router: Router) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.registroService.listar().subscribe((pessoas: Pessoa[]) => {
      this.pessoas = pessoas;
    });
  }

  editarPessoa(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  deletarPessoa(id: number): void {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Essa ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.registroService.deletar(id).subscribe(() => {
          Swal.fire('Deletado!', 'O registro foi deletado.', 'success');
          this.carregarPessoas(); 
        }, (error) => {
          console.error('Erro ao deletar pessoa:', error);
          Swal.fire('Erro!', 'Ocorreu um erro ao deletar o registro.', 'error');
        });
      }
    });
  }
}
