import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produto.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ProdutoDTO } from '../../../models/produto.dto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: ProdutoDTO[];

  constructor(
    private produtoService: ProdutoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.produtoService.findAll().subscribe(response => {
      this.produtos = response;
    }, error => {
      this.messageService.add({severity: 'error', detail: 'Não foi possivel retornar lista de produtos!'});
    });
  }

}
