import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  productTitle: string;
  constructor() { }

  ngOnInit() {
    this.productTitle = 'Kredit Pemilikan Mobil';
  }

}
