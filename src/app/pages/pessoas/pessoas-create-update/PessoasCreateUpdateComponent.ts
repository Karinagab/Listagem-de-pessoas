import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-pessoas-create-update',
  templateUrl: './pessoas-create-update.component.html',
  styleUrls: ['./pessoas-create-update.component.css']
})
export class PessoasCreateUpdateComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private registroService: RegistroService) {
    this.profileForm = this.fb.group({
      id: new FormControl(0),
      nome: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      age: new FormControl(0, [Validators.required, Validators.min(0)]),
      email: new FormControl('', Validators.required),
      isActive: new FormControl(false),
      country: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const novaPessoa: Pessoa = this.profileForm.value;
      this.registroService.cadastrar(novaPessoa).subscribe((result: Pessoa) => {
        Swal.fire({
          title: 'Pessoa cadastrada com sucesso!',
          text: 'PARABÉNS CHAMPS!!',
          icon: 'success',
        }).then(() => { 
          this.router.navigateByUrl('/registro'); 
        });
      });
    }
  }
  
 }