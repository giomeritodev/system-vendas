import { Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { CategoriaComponent } from './../categoria/categoria.component';

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