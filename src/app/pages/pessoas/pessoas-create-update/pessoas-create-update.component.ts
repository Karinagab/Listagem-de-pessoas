import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/pessoa';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-pessoas-create-update',
  templateUrl: './pessoas-create-update.component.html',
  styleUrls: ['./pessoas-create-update.component.css']
})
export class PessoasCreateUpdateComponent {


  pessoaForm!: FormGroup;
  profileForm = new FormGroup({
    
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    email: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required)
  });

  constructor(private registroService: RegistroService, private router: Router, private fb: FormBuilder) {}

  onSubmit() {
    const novaPessoa: Pessoa = this.pessoaForm.value; 
    this.registroService.cadastrar(novaPessoa).subscribe(
      result => {
      console.log(result)
      Swal.fire({
        title: 'Pessoa cadastrada com sucesso!',
        text: 'PARABENS!!',
        icon: 'success',
      })
      this.router.navigateByUrl('/registro')
})  
  }
  ;
}
