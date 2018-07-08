import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ROUTES } from './router/app-router';
import { MenubarComponent } from './menubar/menubar.component';
import { CategoriaComponent } from './categoria/categoria.component';

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

    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
