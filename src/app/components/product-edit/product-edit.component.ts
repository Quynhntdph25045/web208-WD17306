import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {

}