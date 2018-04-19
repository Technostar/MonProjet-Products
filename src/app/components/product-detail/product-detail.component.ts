import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  code: string;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    // this.code = this._route.snapshot.params['id'];
    this._route.params.subscribe(
      params => this.code = params['id']
    );
  }

}
