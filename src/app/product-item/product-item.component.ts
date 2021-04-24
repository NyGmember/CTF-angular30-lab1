import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;

  isSelected:Boolean;

  @Output()
    OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  selected(){
    this.OnSelected.emit(this)
  }

}
