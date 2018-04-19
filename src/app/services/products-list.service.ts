import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProductsListService {
  /**
   *
   */
  private productUrl = 'http://localhost:3000/products';
  private httpClient: HttpClient;

  /**
   * @constructor
   */
  constructor(private _httpClient: HttpClient) {
    this.httpClient = _httpClient;
  }

  /**
   * @function getAllProducts
   * @return Observable<Product[]>
   */
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl);
  }
}
