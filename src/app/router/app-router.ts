import { Routes } from '@angular/router';

import { HomeComponent } from './../pages/home/home.component';
import { CategoriaComponent } from './../pages/categoria/categoria.component';
import { ProdutoComponent } from '../pages/produto/produto.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'categorias',
        component: CategoriaComponent
    },
    {
        path: 'produtos',
        component: ProdutoComponent
    }        
]