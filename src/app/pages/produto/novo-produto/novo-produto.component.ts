import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../../services/produto.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  produtoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.produtoForm = this.formBuilder.group({
      codigoInterno: [null, Validators.required],
      codigoBarras: [''],
      nome: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  criar(){
    this.produtoService.create(this.produtoForm.value).subscribe(response => {
      this.produtoForm.reset();
      this.messageService.add({severity: 'success', detail: 'Produto adicionado com sucesso!'});      
    }, (err: HttpErrorResponse) => {
      if(err.error instanceof Error){
        this.messageService.add({severity: 'error', detail: 'Não foi possivel adicionar produto!'});
      }else{
        this.messageService.add({severity: 'error', detail: '(Erro 400) Bad Request!, API Ausente ' + Error });
      }  
    });
  }
}
