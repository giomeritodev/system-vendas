import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api-config";
import { ProdutoDTO } from "../models/produto.dto";

@Injectable()
export class ProdutoService{

    constructor(
        private http: HttpClient
    ) { }

    findAll(): Observable<ProdutoDTO[]>{
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseURL}/produtos`);
    }

    create(produto: ProdutoDTO): Observable<ProdutoDTO>{
        return this.http.post<ProdutoDTO>(`${API_CONFIG.baseURL}/produtos`, produto);
    }
    
}