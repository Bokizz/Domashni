import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../modules/products';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() 
product: Product = {} as Product;
}
