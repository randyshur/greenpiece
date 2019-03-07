import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("https://efa-gardenapp-backend.herokuapp.com/api/product");
  }
}
