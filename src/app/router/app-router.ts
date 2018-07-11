import { Routes } from '@angular/router';

import { HomeComponent } from './../pages/home/home.component';
import { CategoriaComponent } from './../pages/categoria/categoria.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'categorias',
        component: CategoriaComponent
    }
]