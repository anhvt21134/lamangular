import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../common/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`http://localhost:3000/products`);
    }
    deleteProduct(id: any): Observable<IProduct> {
        return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`);
    }
    getProductById(id: number): Observable<IProduct> {
        return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
    }
    addProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(`http://localhost:3000/products`, product);
    }
    updateProduct(product: IProduct): Observable<IProduct> {
        return this.http.patch<IProduct>(`http://localhost:3000/products/${product.id}`, product);
    }
    listProduct(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`http://localhost:3000/products`);
    }
}
