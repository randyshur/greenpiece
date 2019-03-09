import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

let token = localStorage.getItem('token');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization':  token //works if i manually pass in a token
  })
};

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceService {

  constructor(private http:HttpClient, 
    private authservice:AuthenticationService
    ) { }

  getProducts(){
    return this.http.get("https://efa-gardenapp-backend.herokuapp.com/api/product");
  }


deleteProduct(id){
  return this.http.delete(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`, httpOptions)
}


}
