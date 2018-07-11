import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_CONFIG } from '../config/api-config';


import { Observable } from 'rxjs';

import { CategoriaDTO } from '../models/categoria.dto';

@Injectable()
export class CategoriaService {

  categoriaDTO: CategoriaDTO;

  constructor(
    private http: HttpClient
  ) { }
  
  findAll(): Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseURL}/categorias`);
  }

  criar(categoria: CategoriaDTO): Observable<CategoriaDTO> {
    return this.http.post<CategoriaDTO>(`${API_CONFIG.baseURL}/categorias`, categoria);
  }

  findById(id: string): Observable<CategoriaDTO> {
    return this.http.get<CategoriaDTO>(`${API_CONFIG.baseURL}/categorias/${id}`);
  }

  alterar(categoriaId: string): Observable<CategoriaDTO> {
    return this.http.put<CategoriaDTO>(`${API_CONFIG.baseURL}/categorias/${categoriaId}`, this.categoriaDTO);
  }

  deletar(id: string): Observable<CategoriaDTO> {
    if (confirm("Deseja realmente deletar?")) {
      return this.http.delete<CategoriaDTO>(`${API_CONFIG.baseURL}/categorias/${id}`);
    }
  }
}
