import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPensamento } from '../interfaces/IPensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "http://localhost:3000/pensamentos";

  constructor(private http:HttpClient) { }

  listar(pagina: number):Observable<IPensamento[]> {
    // Acrescentando paginação...
    const itensPorPagina = 6;
    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit",itensPorPagina)

   // return this.http.get<IPensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`);
   return this.http.get<IPensamento[]>(this.API,{params: params});
  }

  criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento)
  }

  editar(pensamento: IPensamento): Observable<IPensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<IPensamento>(url, pensamento )

  }

  excluir(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<IPensamento>(url)
  }

  buscarPorId(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<IPensamento>(url)
  }


}
