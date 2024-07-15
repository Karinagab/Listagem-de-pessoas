import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaPessoasComponent } from './pages/pessoas/lista-pessoas/lista-pessoas.component';
import { PessoasCreateUpdateComponent } from './pages/pessoas/pessoas-create-update/pessoas-create-update.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {

    path: 'registro', component: ListaPessoasComponent
  },
  {
    path: 'pessoas/create', component: PessoasCreateUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
