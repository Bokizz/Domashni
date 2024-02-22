import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { SaladsComponent } from './salads/salads.component';
import { KebabsComponent } from './kebabs/kebabs.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
  },
  
  {
    path: 'contact',
    component: ContactComponent,
    title: "Contact"
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: "About Us"
  }
  ,
  {
        path: 'pizzas',
        component: PizzasComponent,
        title: "Pizzas"
      },
      {
        path: 'salads',
        component: SaladsComponent,
        title: "Salads"
      },
      {
        path: 'kebabs',
        component: KebabsComponent,
        title: "Kebabs"
      }
];
