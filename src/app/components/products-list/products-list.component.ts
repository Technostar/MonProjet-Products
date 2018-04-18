import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  data: Product[];
  constructor(private _productListService: ProductsListService) {
  }

  ngOnInit() {
    this._productListService.getAllProducts().subscribe(
      (products) => (this.data = products)
    );
  }

}
