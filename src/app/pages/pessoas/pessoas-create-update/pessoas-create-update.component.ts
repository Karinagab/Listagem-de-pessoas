import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoas-create-update',
  templateUrl: './pessoas-create-update.component.html',
  styleUrls: ['./pessoas-create-update.component.css']
})
export class PessoasCreateUpdateComponent implements OnInit {

  pessoaForm!: FormGroup;
  pessoaId!: number;

  constructor(
    private registroService: RegistroService, 
    private router: Router, 
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      role: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      isActive: [false],
      country: ['', Validators.required],
      experience: ['', Validators.required]
    });

    this.pessoaId = this.route.snapshot.params['id'];
    if (this.pessoaId) {
      this.registroService.listar().subscribe((pessoas: Pessoa[]) => {
        const pessoa = pessoas.find(p => p.id === this.pessoaId);
        if (pessoa) {
          this.pessoaForm.patchValue(pessoa);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.pessoaForm.valid) {
      const pessoa: Pessoa = this.pessoaForm.value; 
      if (pessoa.id) {
        this.registroService.atualizar(pessoa).subscribe(
          result => {
            Swal.fire({
              title: 'Pessoa atualizada com sucesso!',
              text: 'PARABENS!!',
              icon: 'success',
            });
            this.router.navigateByUrl('/registro');
          }
        );
      } else {
        this.registroService.cadastrar(pessoa).subscribe(
          result => {
            Swal.fire({
              title: 'Pessoa cadastrada com sucesso!',
              text: 'PARABENS!!',
              icon: 'success',
            });
            this.router.navigateByUrl('/registro');
          }
        );
      }
    }
  }
}