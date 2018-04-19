import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';


const routeTable = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'products/add', component: ProductsListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routeTable),
  ],
  exports: [
    RouterModule
  ]
  providers: [],
  bootstrap: []
})
export class MyRoutingModule { }
