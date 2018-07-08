import { Component, OnInit } from '@angular/core';
import { CategoriaDTO } from '../../models/categoria-dto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: CategoriaDTO[];

  constructor() { }

  ngOnInit() {
  }

}
