import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { GrowlModule } from 'primeng/growl';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { ROUTES } from './router/app-router';
import { MenubarComponent } from './pages/menubar/menubar.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CategoriaService } from './services/categoria.service';
import { ProdutoComponent } from './pages/produto/listar/produto.component';
import { ProdutoService } from './services/produto.service';
import { NovoProdutoComponent } from './pages/produto/novo-produto/novo-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MenubarComponent,
    CategoriaComponent,
    ProdutoComponent,
    NovoProdutoComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    GrowlModule,
    InputTextModule,
    TableModule,
    ButtonModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CategoriaService,
    ProdutoService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
