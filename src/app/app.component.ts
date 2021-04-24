import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";
import { BackendService } from "./backend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular30-lab1';

  @ViewChild('productList')
  productList: ProductListComponent;

  constructor(private backendService: BackendService){  }

  ngAfterViewInit(){
    this.productList.products = this.backendService.getProducts();
  }
}
