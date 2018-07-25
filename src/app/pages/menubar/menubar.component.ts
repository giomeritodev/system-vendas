import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.menuBar();
  }

  menuBar(){
    this.items = [
      {
        label: 'Home',
        routerLink: '/'
      },
      {
        label: 'Cadastro',
        items: [          
          {
            label: 'Categorias',
            routerLink: '/categorias'
          },
          {
            label: 'Produtos',
            routerLink: '/produtos'
          }
        ]
      }
    ]
  }

}
