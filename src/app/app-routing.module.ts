import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: {
      solidNavbar: false
    },
    component: HomeComponent
  },
  {
    path: 'product',
    data: {
      solidNavbar: true
    },
    component: ProductComponent
  },
  {
    path: 'about',
    data: {
      solidNavbar: true
    },
    component: AboutComponent
  },
  {
    path: 'contact',
    data: {
      solidNavbar: true,
      onContact: true
    },
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
