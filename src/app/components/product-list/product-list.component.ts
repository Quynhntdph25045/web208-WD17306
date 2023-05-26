import { Route } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  
  products: IProduct[]=[]


   constructor(private ProductService: ProductService){
      this.ProductService.getProducts().subscribe((data)=>{
        this.products = data,
        console.log(data);
        
      })
   }

  removeItem(id: number){
    this.ProductService.deleteProduct(id).subscribe(()=> {
      this.products.filter((item)=>{item.id == id});
    })
  }
}