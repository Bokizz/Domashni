import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { DRIVERS } from '../Angular/db-data';
import { Driver } from './module/klasa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DriverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oWeb';

  maks = DRIVERS[1];
  checo = DRIVERS[2];
  lewis = DRIVERS[3];
  vozaci = DRIVERS;

  appKlik(suzi: Driver) {
    console.log("Me klikna od app", suzi);
  }
}
