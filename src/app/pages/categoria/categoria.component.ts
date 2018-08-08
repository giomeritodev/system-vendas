import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/categoria.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: CategoriaDTO[];

  categoriaForm: FormGroup;
 

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.configurarFormulário();
    this.listar();
  }

  configurarFormulário() {
    this.categoriaForm = this.formBuilder.group({
      nome: ['', Validators.required]
    });
  }

  listar() {
    this.categoriaService.findAll().subscribe(response => {
      this.categorias = response;
    }, error => {
      this.messageService.add({severity: 'error', detail: 'Não foi possivel retornar lista de categorias!'});
    });
  }


  criar() {
    this.categoriaService.criar(this.categoriaForm.value)
      .subscribe(response => {
        this.categoriaForm.reset();
        this.messageService.add({ severity: 'success', detail: 'Categoria adicionada com sucesso!' });
        this.listar();
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.messageService.add({ severity: 'error', detail: 'Erro ao adicionar categoria' });
        } else {
          this.messageService.add({ severity: 'error', detail: '(Erro 400 ) Bad Request! ' + Error });
        }
      });
  }

  editar(id: string) {
    this.categoriaService.findById(id).subscribe(response => {
      this.categoriaForm.get('nome').setValue(response.nome);                
    }, (err: HttpErrorResponse) => {
      this.messageService.add({severity: 'error', detail: 'Erro ao carregar os dados da categoria! Id: ' + id});
    });
  }

  delete(id: string) {
    this.categoriaService.deletar(id).subscribe(response => {                  
      this.messageService.add({ severity: 'success', detail: 'Categoria delatada com sucesso!'});
      this.listar();
    }, error => {
      this.messageService.add({severity: 'error', detail: 'A categoria não pode ser deletada!'});
    });
  }
}