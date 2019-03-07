import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products=<any>[];

  constructor(private productsservice: ProductsServiceService){ }


  ngOnInit() {
    this.productsservice.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    console.log(this.products)
    })
  }

}
