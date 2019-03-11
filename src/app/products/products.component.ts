import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import {AuthenticationService} from '../services/authentication.service';
// import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products=<any>[];

  constructor(private productsservice: ProductsServiceService, private authservice: AuthenticationService){ }


  ngOnInit() {
    this.productsservice.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    console.log(this.products)
    })
  }

  deleteProduct(product){
    console.log(product)
    // this.authservice.getToken()

this.productsservice.deleteProduct(product).subscribe(data => console.log('product deleted'))
  }

}
