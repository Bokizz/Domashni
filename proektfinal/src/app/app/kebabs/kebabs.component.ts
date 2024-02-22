import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KEBABS } from '../database/kebabsdb';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-kebabs',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './kebabs.component.html',
  styleUrl: './kebabs.component.css'
})
export class KebabsComponent {
 kebabss = KEBABS;
}
