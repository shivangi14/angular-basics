import { Injectable } from '@angular/core';
import { IProduct } from 'src/api/products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log(data),
            catchError(this.handleError))
        );
    }
    private handleError(err : HttpErrorResponse){
        console.log(err);
        return throwError(err);
    }
}