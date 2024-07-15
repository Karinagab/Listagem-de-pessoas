import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PessoasListComponent } from './pages/pessoas/lista-pessoas/lista-pessoas.component';
import { PessoasCreateUpdateComponent } from './pages/pessoas/pessoas-create-update/PessoasCreateUpdateComponent';
import { Routes } from '@angular/router';

  export const routes: Routes = [
    { path: '', redirectTo: '/registro', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'registro', component: PessoasListComponent},
    { path: 'cadastrar', component: PessoasCreateUpdateComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
