import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/api/products/product';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string= 'Products List';
    imageWidth: number = 100;
    imageMargin: number = 5;
    showImage: boolean = false;
    _listFilter: string;
    filteredProducts: IProduct[];
    products: IProduct[];
    errorMessage: string;

    constructor(private productService: ProductService){
    }

    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter? this.performFilter(this.listFilter) : this.products;
    }
      toggleImage(): void{
          this.showImage = !this.showImage;
      }

      ngOnInit(): void{
        console.log('In oninit');
        this.productService.getProducts().subscribe({
          next: output => {
            this.products = output;
            this.filteredProducts = this.products;
          }
            ,
          error: err => this.errorMessage = err
        }) 
      }

      performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) =>
          product.productName.toLowerCase().indexOf(filterBy) !== -1);
      }

      onRatingClicked(msg: string): void {
        this.pageTitle = "Products List : " + msg;
      }
}