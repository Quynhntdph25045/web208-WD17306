import { ProductService } from 'src/app/Services/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})

export class ProductAddComponent{

  constructor(private ProductService: ProductService,
    private fb: FormBuilder){

  }
  
  addProduct = this.fb.group({
    name: [''],
    price: [0]
  })

  onHandleAdd(){
    if(this.addProduct.valid){
      const products: any={
         name: this.addProduct.value.name || '',
         price: this.addProduct.value.price || '',
      }
      this.ProductService.addProduct(products).subscribe((data)=>{
         console.log(data);
      })
    }
  }

   
}
