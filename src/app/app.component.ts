import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular29-lab2';

  @ViewChild('productList')
  productList: ProductListComponent;

  ngAfterViewInit(){
    this.productList.products = [
      {
        name: "ส้มโอ",
        price: 500
      },
      {
        name: "แตงโม",
        price: 5000
      },
      {
        name: "มะพร้าว",
        price: 900
      }
    ];
  }
}
