import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("https://efa-gardenapp-backend.herokuapp.com/api/product");
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     this.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   }
  // }

  // deleteProduct(product: Product | number): Observable<Product>{
  //   // const id=products.id
  //   const id = typeof product=== 'number' ? product : product.id;
  //   const url=`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`

  //   return this.http.delete<Product>(url, httpOptions).pipe(
  //     tap(_ => this.log('you deleted a product ^_^')),
  //     catchError(this.handleError<Product>(this.deleteProduct))
  //   )
  // }

  deleteProduct(product: Product){
return this.http.delete(`https://efa-gardenapp-backend.herokuapp.com/api/product/${product.id}`)
  }

}
