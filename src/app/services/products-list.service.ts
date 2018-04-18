import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProductsListService {
  private data: Product[];
  private productUrl = 'http://localhost:3000/products';
  private httpClient: HttpClient;
  constructor(private _httpClient: HttpClient) {
    this.httpClient = _httpClient;
    this.data = [
      {code: 'P1000', nom: 'Café', prixUnitaire: 1500},
      {code: 'P1001', nom: 'Thé', prixUnitaire: 1500},
      {code: 'P1002', nom: 'Coca Cola', prixUnitaire: 1500}
    ];
  }
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl);
  }
}
