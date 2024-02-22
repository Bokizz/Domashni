import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { PIZZAS } from '../database/pizzasdb';

@Component({
  selector: 'app-pizzas',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css'
})
export class PizzasComponent {
pizzass = PIZZAS;
}
