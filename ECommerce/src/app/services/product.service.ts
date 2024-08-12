import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Product } from '../../types/types';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  link = "http://localhost:3000/";
  getAllProducts(params?: { [key: string]: any }): Observable<Product[]> {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
      });
    }
    return this.http.get<Product[]>(this.link + 'product', { params: httpParams });
  }
}
