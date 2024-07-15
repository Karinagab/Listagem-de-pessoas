import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListaPessoasComponent } from './pages/pessoas/lista-pessoas/lista-pessoas.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './services/registro.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoasCreateUpdateComponent } from './pages/pessoas/pessoas-create-update/pessoas-create-update.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaPessoasComponent,
    PessoasCreateUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
