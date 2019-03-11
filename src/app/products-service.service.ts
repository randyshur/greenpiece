import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';



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
      // console.log(this.authservice.token)
      let token = localStorage.getItem('token');
console.log(token)
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization':   token
    })
    
  };
  return this.http.delete(`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`, httpOptions)
}


}
