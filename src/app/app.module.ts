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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MenubarComponent,
    CategoriaComponent
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
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
