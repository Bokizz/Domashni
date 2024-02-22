import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { SALADS } from '../database/saladsdb';


@Component({
  selector: 'app-salads',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './salads.component.html',
  styleUrl: './salads.component.css'
})
export class SaladsComponent {
saladss = SALADS;
}
