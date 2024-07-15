import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listagem-de-Pessoas';

  items: Array<MenuItem> = [
    {
      'name': 'Home',
      'url': '/home'
    },
    {
      'name': 'Registro',
      'url': '/registro',
    },
    {
      'name': 'Cadastro',
      'url': '/cadastrar',
    },
  ]
}
