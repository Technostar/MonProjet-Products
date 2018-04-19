import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListService } from './services/products-list.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MyRoutingModule } from './myRoutingModule/myrouting.module';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsListComponent,
    WelcomeComponent,
    NotFoundComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyRoutingModule
  ],
  providers: [
    ProductsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
