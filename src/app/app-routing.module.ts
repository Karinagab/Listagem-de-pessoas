import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaPessoasComponent } from './pages/pessoas/lista-pessoas/lista-pessoas.component';
import { PessoasCreateUpdateComponent } from './pages/pessoas/pessoas-create-update/pessoas-create-update.component';
import { Routes } from '@angular/router';

  export const routes: Routes = [
    { path: '', redirectTo: '/registro', pathMatch: 'full' },
    { path: 'registro', component: ListaPessoasComponent },
    { path: 'criar', component: PessoasCreateUpdateComponent },
    { path: 'editar/:id', component: PessoasCreateUpdateComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
